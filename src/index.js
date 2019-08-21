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

function DecodeMessage(){
    event.preventDefault();    
    let decodetext = document.getElementById("Dmessage").value;
    let decodechave = Number(document.getElementById("Dkey").value);
    
    
    let decode = window.cipher.decode(decodetext, decodechave)


document.getElementById("resultdecode").innerHTML=`${decode}`
}

/*let resultadoFinal = cipher.encode(msg,deslocamento)*/
