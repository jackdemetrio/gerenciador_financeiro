
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = new sqlite3.Database("./financas.db", (erro) => {
    if (erro) {
        console.log("Erro ao conectar ao banco:", erro.message);
    } else {
        console.log("Banco de dados conectado!");
    }
});

// Criar tabela de movimentações
db.run(`
    CREATE TABLE IF NOT EXISTS movimentacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT NOT NULL,
        valor REAL NOT NULL,
        tipo TEXT NOT NULL
    )
`);

// Listar movimentações
app.get("/movimentacoes", (req, res) => {
    db.all("SELECT * FROM movimentacoes ORDER BY id DESC", [], (erro, dados) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        res.json(dados);
    });
});

// Cadastrar movimentação
app.post("/movimentacoes", (req, res) => {
    const { descricao, valor, tipo } = req.body;

    if (
        typeof descricao !== "string" ||
        !descricao.trim() ||
        typeof valor !== "number" ||
        !Number.isFinite(valor) ||
        valor <= 0 ||
        !["receita", "despesa"].includes(tipo)
    ) {
        return res.status(400).json({ erro: "Dados inválidos" });
    }

    const sql = `
        INSERT INTO movimentacoes (descricao, valor, tipo)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [descricao.trim(), valor, tipo], function(erro) {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        res.status(201).json({
            id: this.lastID,
            descricao: descricao.trim(),
            valor,
            tipo
        });
    });
});

// Excluir movimentação
app.delete("/movimentacoes/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ erro: "ID inválido" });
    }

    db.run(
        "DELETE FROM movimentacoes WHERE id = ?",
        [id],
        function(erro) {
            if (erro) {
                return res.status(500).json({ erro: erro.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ erro: "Registro não encontrado" });
            }

            res.json({ mensagem: "Movimentação excluída!" });
        }
    );
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
