
const API = "http://localhost:3000/movimentacoes";

const formulario = document.getElementById("formMovimentacao");
const lista = document.getElementById("listaMovimentacoes");

// Buscar movimentações no banco
async function carregarMovimentacoes() {
    try {
        const resposta = await fetch(API);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar movimentações");
        }

        const movimentacoes = await resposta.json();
        atualizarTela(movimentacoes);
    } catch (erro) {
        console.log("Erro:", erro);
        alert("Não foi possível conectar ao servidor.");
    }
}

// Formatar valores em reais
function formatarValor(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Atualizar a tela
function atualizarTela(movimentacoes) {
    lista.innerHTML = "";

    let receitas = 0;
    let despesas = 0;

    movimentacoes.forEach((mov) => {
        if (mov.tipo === "receita") {
            receitas += mov.valor;
        } else {
            despesas += mov.valor;
        }

        const linha = document.createElement("tr");

        const descricao = document.createElement("td");
        descricao.textContent = mov.descricao;

        const tipo = document.createElement("td");
        tipo.textContent = mov.tipo;

        const valor = document.createElement("td");
        valor.textContent = formatarValor(mov.valor);

        const acao = document.createElement("td");
        const botao = document.createElement("button");

        botao.textContent = "Excluir";
        botao.className = "btn-excluir";
        botao.onclick = () => excluirMovimentacao(mov.id);

        acao.appendChild(botao);

        linha.appendChild(descricao);
        linha.appendChild(tipo);
        linha.appendChild(valor);
        linha.appendChild(acao);

        lista.appendChild(linha);
    });

    document.getElementById("totalReceitas").textContent =
        formatarValor(receitas);

    document.getElementById("totalDespesas").textContent =
        formatarValor(despesas);

    document.getElementById("saldo").textContent =
        formatarValor(receitas - despesas);
}

// Cadastrar movimentação
formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value.trim();
    const valor = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    if (!descricao || !Number.isFinite(valor) || valor <= 0) {
        alert("Preencha os dados corretamente!");
        return;
    }

    try {
        const resposta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                descricao: descricao,
                valor: valor,
                tipo: tipo
            })
        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar");
        }

        formulario.reset();
        await carregarMovimentacoes();

    } catch (erro) {
        console.log("Erro:", erro);
        alert("Erro ao salvar movimentação.");
    }
});

// Excluir movimentação
async function excluirMovimentacao(id) {
    if (confirm("Deseja excluir esta movimentação?")) {
        try {
            const resposta = await fetch(`${API}/${id}`, {
                method: "DELETE"
            });

            if (!resposta.ok) {
                throw new Error("Erro ao excluir");
            }

            await carregarMovimentacoes();

        } catch (erro) {
            console.log("Erro:", erro);
            alert("Erro ao excluir movimentação.");
        }
    }
}

// Carregar os dados ao abrir a página
carregarMovimentacoes();
