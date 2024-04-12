/*
    quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem

        a imagem atual começa no 0 pq é a primeira imagem assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostar  segunda imagem
        
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
        
        mostrar a proxima imagem 
            pegar todas as imagens , descobrir qual é a proxima imagem , e colocar a classe mostrar nela 
*/
const imagensPainel = document.querySelectorAll('.imagem-paineis');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderimagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}
function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}



setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;

    }

    imagemAtual++;

    esconderimagem();
    mostrarImagem();

});
setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }
    imagemAtual--;

    esconderimagem();
    mostrarImagem();



})
