/*TO DO
    - reformular o visor, para que apresente o resultado em tempo real
*/

//função que pega o valor ao pressionar o botão
function adicionarNumero(num){
    var numero = document.getElementById('visor').innerHTML; //acessa o visor
    document.getElementById('visor').innerHTML = numero + num; //adiciona o número no visor
    
}
//função que realiza o cálculo matemático inserido
function calculo(){

    var resultado = document.getElementById('visor').innerHTML; // acessa o visor
    if (resultado != '') {document.getElementById('visor').innerHTML = eval(resultado);} //caso encontre algum número no visor, faz o cálculo
    
}

