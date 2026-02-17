export function criarNomeLista() {
    const main = document.getElementById('main')
    const nomeParaLista = document.getElementById('secao-nome-lista')
    const secaoListaSalva = document.getElementById('secao-lista-salva')
    const secaoListaFinal = document.getElementById('secao-lista-final')
    nomeParaLista.classList.remove('oculto')
    nomeParaLista.classList.add('visivel')
    main.classList.add('oculto')
    secaoListaSalva.classList.add('oculto')
    secaoListaFinal.classList.add('oculto')
}

export function irParaCriacao() {
    const nomeParaLista = document.getElementById('secao-nome-lista')
    const secaoAdicionar = document.getElementById('secao-adicionar-item')
    nomeParaLista.classList.remove('visivel')
    nomeParaLista.classList.add('oculto')
    secaoAdicionar.classList.remove('oculto')
    secaoAdicionar.classList.add('visivel')
}

export function savelocalStorage(nomeLista, listaCompras) {
    localStorage.setItem(nomeLista, JSON.stringify(listaCompras))
}

export function btnVoltar() {
    const btns = document.querySelectorAll('.voltar')
    const main = document.getElementById('main')
    const nomeParaLista = document.getElementById('secao-nome-lista')
    const secaoAcessarListaSalva = document.getElementById('secao-Acessar-lista')
    const secaoListaSalva = document.getElementById('secao-lista-salva')
    const listaFinal = document.getElementById('secao-lista-final')
    const secaoAdicioar = document.getElementById('secao-adicionar-item')
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const acao = event.target.dataset.acao
            if (acao === 'voltar-inicio') {
                nomeParaLista.classList.remove('visivel')
                nomeParaLista.classList.add('oculto')
                main.classList.remove('oculto')
                secaoAcessarListaSalva.classList.remove('oculto')
                secaoListaSalva.replaceChildren()
            }
            if (acao === 'voltar-lista') {
                //secaoAcessarListaSalva.classList.remove('oculto')
                listaFinal.classList.add('oculto')
                secaoListaSalva.classList.remove('oculto')

            }

            if (acao === 'voltar-adicionar') {
                //secaoAcessarListaSalva.classList.remove('oculto')
                listaFinal.classList.add('oculto')
                secaoAdicioar.classList.add('visivel')
                secaoAdicioar.classList.remove('oculto')
            }
            if (acao === 'recarregar') {
                window.location.reload()
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