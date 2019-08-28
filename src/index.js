//DOM

// função para quando o usuário clica no botão    
document.getElementById("encodebutton").addEventListener("click", EncodeMessage);
document.getElementById("decodebutton").addEventListener("click", DecodeMessage);

//função com os valores de encode
function EncodeMessage() {
  event.preventDefault();
  // transforma os valores recebidos no input em variável 
  let text = document.getElementById("message").value;
  let chave = Number(document.getElementById("key").value);
  //envia os valores de variáveis para o cipher.js  
  let teste = window.cipher.encode(chave, text);
  //recebe os valores obtidos a partir do cipher.js e envia para o HTML
  document.getElementById("result").innerHTML=`${teste}`;
}
//função com os valores do decode
function DecodeMessage() {
  event.preventDefault();
  // transforma os valores recebidos no input em variável
  let decodetext = document.getElementById("Dmessage").value;
  let decodechave = Number(document.getElementById("Dkey").value);
  //envia os valores de variáveis para o cipher.js
  let decode = window.cipher.decode(decodechave, decodetext);
  //recebe os valores obtidos a partir do cipher.js e envia para o HTML
  document.getElementById("resultdecode").innerHTML=`${decode}`;
}