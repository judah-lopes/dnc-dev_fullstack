var setaEsquerda = document.querySelector('.seta_esquerda')
var setaDireita = document.querySelector('.seta_direita')
var bruna = document.querySelector('.bruna')
var leonardo = document.querySelector('.leonardo')
var samantha = document.querySelector('.samantha')

setaDireita.addEventListener('click', rolarParaDireita)
setaEsquerda.addEventListener('click', rolarParaEsquerda)

function rolarParaDireita() {
    setaDireita.style.display = 'none'
    setaEsquerda.style.display = 'block'
    bruna.style.display = 'none'
    samantha.style.display = 'block'
}

function rolarParaEsquerda() {
    setaEsquerda.style.display = 'none'
    setaDireita.style.display = 'block'
    bruna.style.display = 'block'
    samantha.style.display = 'none'
}