/* function clique
    pega o valor do input
    Pega o segundo valor
    chamar funcão encode com parametros */

function EncodeMessages(){
    event.preventDefault();    
    let text = document.getElementById("message").value;
    let chave = Number(document.getElementById("key").value);
    
    let teste = window.cipher.encode(text, chave)


document.getElementById("result").innerHTML=`${teste}`
}


/*let resultadoFinal = cipher.encode(msg,deslocamento)*/
