let contador = 0;
const imagensUrl = ['./imagens/1.jpg', './imagens/2.jpg', './imagens/3.jpg', './imagens/4.jpg']
slideStart = () => {
	contador == 3 ? contador=0 : contador++
    document.querySelector('.slide').style.background = 'url('+imagensUrl[contador]+')'
}
setInterval(slideStart, 3000)