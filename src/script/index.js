


function adicionarNumero(num){
    // var pegando valor 
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = '' + numero + num;
    


}
function calculo(){
    var resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = eval(resultado);
}
