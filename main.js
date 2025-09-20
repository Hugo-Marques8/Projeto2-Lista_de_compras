let listaCompras = {

}

function comecar() {
    let botaoComecar = document.getElementById('btn-iniciar-sim')
    let secaoInicial = document.getElementById('secao-pergunta-inicial')
    let secaoAdicioar = document.getElementById('secao-adicionar-item')
    botaoComecar.addEventListener('click', () => {
        secaoInicial.classList.add('oculto')
        secaoAdicioar.classList.remove('oculto')
    })
}

comecar()
const btnAdicionar = document.getElementById('btn-adicionar-item')
btnAdicionar.addEventListener('click', () => {
    adicionar()
    const item = document.getElementById('nome-item').value
    if (item) {
        btnAdicionar.textContent = 'adicionado'
        btnAdicionar.classList.toggle('btnItemEvent')
        setTimeout(() => {
            btnAdicionar.textContent = 'Adicionar Item'
            btnAdicionar.classList.toggle('btnItemEvent')
        }, 1000)
    }
})

function adicionar() {
    const categoria = document.getElementById('categoria-item').value
    const item = document.getElementById('nome-item').value
    let listaFinal = document.getElementById('lista-agrupada')
    if (!item) {
        alert('Digite um item')
    }
    if (!listaCompras[categoria]) {
        listaCompras[categoria] = []
    }
    if (item) {
        listaCompras[categoria].push(item)
        listaFinal.innerHTML = ""
        for (let categoria in listaCompras) {
            let ul = document.createElement('ul')
            let titulo = document.createElement('h3')
            titulo.textContent = categoria
            ul.appendChild(titulo)

            listaCompras[categoria].forEach(item => {
                let div = document.createElement('div') // cria uma div para separar o "li" do "button"
                div.classList.add('item-div')

                let li = document.createElement('li')
                li.textContent = item

                let btn = document.createElement('button')
                btn.textContent = 'Carrinho'
                btn.addEventListener('click', () => {
                    btn.classList.toggle('btnItemEvent')
                })

                div.appendChild(li)
                div.appendChild(btn)
                ul.appendChild(div)

            });

            ul.classList.add('lista-itens')

            listaFinal.appendChild(ul)
        }
    }
}

const btnAcessarLista = document.getElementById('btn-acessar-lista').addEventListener('click', () => {
    const secaolista = document.getElementById('secao-lista-final')
    const secaoAdicioar = document.getElementById('secao-adicionar-item')
    secaoAdicioar.classList.add('oculto')
    secaolista.classList.remove('oculto')
})


