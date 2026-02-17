
import { criarNomeLista, irParaCriacao, savelocalStorage, btnVoltar} from './events.js'
import { adicionar, atualizarLista, listaCompras, nomeDaLista } from './ui.js'

btnVoltar()
const btnNovaLista = document.getElementById('btn-iniciar-sim')
btnNovaLista.addEventListener('click', () => criarNomeLista())
const btnNomeLista = document.getElementById('btn-confirmar-nome')
const inputNomeLista = document.getElementById('nome-lista')
btnNomeLista.addEventListener('click', () => {
    const nomeLista = inputNomeLista.value
    savelocalStorage(nomeLista, listaCompras)
    irParaCriacao()
})
const btnAdicionar = document.getElementById('btn-adicionar-item')
let botaoAdicionarClicado = false
btnAdicionar.addEventListener('click', () => {
    //Adicionar dentro da função para ser lido varias vezes, e não apenas uma vez
    const categoria = document.getElementById('categoria-item').value
    const item = document.getElementById('nome-item').value

    adicionar(categoria, item)
    // o if verifica se item existe, ou seja se foi digitado um valor.
    if (item) {
        btnAdicionar.textContent = 'adicionado'
        btnAdicionar.classList.toggle('btnItemEvent')
        setTimeout(() => {
            btnAdicionar.textContent = 'Adicionar Item'
            btnAdicionar.classList.toggle('btnItemEvent')
        }, 1000)
        const nomeLista = inputNomeLista.value
        savelocalStorage(nomeLista, listaCompras)
        botaoAdicionarClicado = true
    }
})

const btnAcessarLista = document.getElementById('btn-acessar-lista')
btnAcessarLista.addEventListener('click', () => {
    if (botaoAdicionarClicado) {
        const secaolista = document.getElementById('secao-lista-final')
        const secaoAdicioar = document.getElementById('secao-adicionar-item')
        secaoAdicioar.classList.remove('visivel')
        secaoAdicioar.classList.add('oculto')
        secaolista.classList.remove('oculto')
        const btnVoltar = document.querySelector('#secao-lista-final .voltar')
        btnVoltar.dataset.acao = 'voltar-adicionar' // Define a ação para "voltar"
        atualizarLista(listaCompras)
    }
})

const secaoListaSalva = document.getElementById('secao-lista-salva')
const btnAcessarListaSalva = document.getElementById('btn-Acessar')
const secaoAcessarListaSalva = document.getElementById('secao-Acessar-lista')
const listaFinal = document.getElementById('secao-lista-final')
btnAcessarListaSalva.addEventListener('click', () => {
    secaoAcessarListaSalva.classList.add('oculto')
    secaoListaSalva.classList.remove('oculto')
    const nomeLista = Object.keys(localStorage)
    nomeDaLista(nomeLista)
    const btn = document.getElementsByClassName('secao-lista-salva-botoes-salvos')
    for (let i = 0; i < btn.length; i++) {
        const nomeListaBtn = btn[i];
        nomeListaBtn.addEventListener('click', () => {
            // 1. Pega o nome da lista a partir do texto do PRÓPRIO botão clicado
            const nomeDaListaClicada = nomeListaBtn.textContent;

            // 2. Usa esse nome para buscar a lista CORRETA no localStorage
            const listaSalva = JSON.parse(localStorage.getItem(nomeDaListaClicada));
            // 3. atualiza a tela com os dados corretos
            if (listaSalva) {
                listaFinal.classList.remove('oculto')
                secaoListaSalva.classList.add('oculto')
                atualizarLista(listaSalva);
            }
        })
    }
})

// E aqui você coloca o código de "delegação de eventos"
document.addEventListener('click', function (event) {

    // Verifica se o alvo do clique (ou um "pai" dele) 
    // é um '.btn-remover-lista'
    const botaoClicado = event.target.closest('.btn-remover-lista');

    if (botaoClicado) {
        // Se for, executa a ação
        // Lógica de remoção (ex: botaoClicado.parentElement.remove();)
    }
});








