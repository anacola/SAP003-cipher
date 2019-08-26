/* function clique
    pega o valor do input
    Pega o segundo valor
    chamar funcão encode com parametros */
document.getElementById("encodebutton").addEventListener("click", EncodeMessage);
document.getElementById("decodebutton").addEventListener("click", DecodeMessage);

function EncodeMessage() {
  event.preventDefault();    
  let text = document.getElementById("message").value;
  let chave = Number(document.getElementById("key").value);
    
  let teste = window.cipher.encode(text, chave);

  document.getElementById("result").innerHTML=`${teste}`;
}

function DecodeMessage() {
  event.preventDefault();
  let decodetext = document.getElementById("Dmessage").value;
  let decodechave = Number(document.getElementById("Dkey").value);
    
  let decode = window.cipher.decode(decodechave, decodetext);

  document.getElementById("resultdecode").innerHTML=`${decode}`;
}

/*let resultadoFinal = cipher.encode(msg,deslocamento)*/
