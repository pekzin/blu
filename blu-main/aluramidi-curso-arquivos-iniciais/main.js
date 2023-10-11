function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
    document.querySelectorAll('.tecla');
    
    const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas[contador].onclick = tocaSom;
    let contador = 0;
   // Estrutura de repetição - Ennquanto
    while (contador < listaDeTeclas.length) {
        listaDeTeclas[contador]. onclick = function(){
    tocaSom('#som_tecla_splash')
        };
        contador = contador + 1;

        console.log(contador);
    }
    const tecla = listaDeTeclas [contador]
    const instrumento =listaDeTeclas[contador].classList [1]
    const idAudio = '#som_${instrumento}';
    console.log(instrumento);
     listadetecla [contador]. onclick= onclick = function () {
        tocaSom(idAudio)
     }
   
