
function adicionarNumero(numero){
    // var pegando valor (atributo)
    var numeracao = numero.getAttribute('data-num');
    // alert ('the' + numero.innerHTML + 'is a' + numeracao + '.')
    console.log(numeracao)
    //var comunicando com o visor
    var visor = document.querySelector('#visor');
    visor.textContent= numeracao;
    console.log(visor.innerHTML)
}
