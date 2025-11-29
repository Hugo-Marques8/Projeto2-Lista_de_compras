export function criarNomeLista() {
    const secaoInicial = document.getElementById('secao-pergunta-inicial')
    const secaoAcessarLista = document.getElementById('secao-Acessar-lista')
    const nomeParaLista = document.getElementById('secao-nome-lista')
    const secaoListaSalva = document.getElementById('secao-lista-salva')
    const secaoListaFinal =  document.getElementById('secao-lista-final')
    nomeParaLista.classList.remove('oculto')
    nomeParaLista.classList.add('visivel')
    secaoInicial.classList.add('oculto')
    secaoAcessarLista.classList.add('oculto')
    secaoListaSalva.classList.add('oculto')
    secaoListaFinal.classList.add('oculto')
}

export function irParaCriacao() {
    const nomeParaLista = document.getElementById('secao-nome-lista')
    const secaoAdicionar = document.getElementById('secao-adicionar-item')
    nomeParaLista.classList.add('oculto')
    secaoAdicionar.classList.remove('oculto')
}

export function savelocalStorage(nomeLista, listaCompras) {
    localStorage.setItem(nomeLista, JSON.stringify(listaCompras))
}

export function btnVoltar() {
    const btns = document.querySelectorAll('.voltar')
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const acao = event.target.dataset.acao
            if (acao === 'recarregar') {
                window.location.reload()
            }
            if (acao === 'voltar') {
                // Esconde a lista final
                document.getElementById('secao-lista-final').classList.add('oculto');
                // Mostra a seção de adicionar item de novo
                document.getElementById('secao-adicionar-item').classList.remove('oculto');
            }
        }
        )
    }
    )
}


// função para remover item da lista
export function removerItem(listaCompras, categoria, item) {
    // encontra o index do item no array da categoria
    // indexOf retorna -1 se o item não for encontrado
    const indice = listaCompras[categoria].indexOf(item)
    // se o index for maior que -1, remove o item do array
    if (indice > -1) {
        // splice remove 1 item a partir do index encontrado
        listaCompras[categoria].splice(indice, 1)
        if (listaCompras[categoria].length === 0) {
            delete listaCompras[categoria] // remove a categoria se estiver vazia
        }
    }
}