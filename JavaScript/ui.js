
// objeto que vai armazenar as categorias e os itens dentro de cada categoria   
export let listaCompras = {
}

export function adicionar(categoria, item) {
    /* o if verifica se item existe, ou seja se foi digitado um valor, nesse caso a ! inverte e se 
    item não existe o alert é acionando */
    if (!item) {
        alert('Digite um item')
    }
    /* o if verifica se categoria existe, ou seja se foi criado uma chave no objeto listaCompras, 
    nesse caso a ! inverte e se categoria não existe, cria uma chave que recebe o valor de um array
    vazio */
    if (!listaCompras[categoria]) {
        listaCompras[categoria] = []
    }
    if (item) {
        listaCompras[categoria].push(item)
    }
}

export function atualizarLista(listaCompras) {
    const listaFinal = document.getElementById('lista-agrupada')
    // const listaFinal = document.getElementById('lista-agrupada')
    // limpa a lista antes de adicionar os itens novamente
    listaFinal.innerHTML = ""
    /* o for in percorre as chaves do objeto listaCompras, nesse caso as categorias */
    for (let categoria in listaCompras) {
        let ul = document.createElement('ul')
        let titulo = document.createElement('h3')
        titulo.textContent = categoria
        ul.appendChild(titulo)
        /* o forEach percorre os arrays de cada chave do objeto listaCompras, e executa o código
        dentro do forEach para cada indice/valor do array */
        listaCompras[categoria].forEach(item => {
            let div = document.createElement('div') // cria uma div para separar o "li" do "button"
            div.classList.add('item-div')

            let li = document.createElement('li')
            li.textContent = item // o textContent de li recebe o valor de item

            const btn = document.createElement('button')
            btn.textContent = 'Carrinho'
            btn.addEventListener('click', () => btn.classList.toggle('btnItemEvent')) // Muda a cor do botão quando clicar )
            div.appendChild(li)
            div.appendChild(btn)
            ul.appendChild(div)

        });
        ul.classList.add('lista-itens')
        listaFinal.appendChild(ul) // adiciona tudo na div lista-agrupada
    }
}


export function nomeDaLista(nomeLista) {
    const secaoListaSalva = document.getElementById('secao-lista-salva')
    const divBtns = document.createElement('div')
    divBtns.classList.add('secao-lista-salva')
    nomeLista.forEach(nome => {
        const btn = document.createElement('button')
        const btnRemover = document.createElement('button')
        btn.classList.add('secao-lista-salva-botoes-salvos')
        btnRemover.classList.add('btn-remover-lista')
        btn.textContent = nome
        btnRemover.dataset.idLista = btn.textContent
        btnRemover.textContent = 'Remover'
        divBtns.appendChild(btn)
        divBtns.appendChild(btnRemover)
        btnRemover.addEventListener('click', () => {
            localStorage.removeItem(btnRemover.dataset.idLista)
            btn.remove()
            btnRemover.remove()
        })
    }
    )
    secaoListaSalva.appendChild(divBtns)
    secaoListaSalva.classList.remove('oculto');

}