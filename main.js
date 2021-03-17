function gerarCorAleatoria(){
    var randomColor = '#'+ Math.floor(Math.random () * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    var text = document.getElementById('cores-texto');
    text.innerText = randomColor;
}