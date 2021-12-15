const areaDoCodigo = document.querySelector('.code-area')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.btn-highlight')

function mudaLinguagem() {
    const codigo = {'texto': areaDoCodigo.querySelector('code').innerText}
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.texto
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})