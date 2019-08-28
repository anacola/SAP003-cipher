window.cipher = {
  encode: encode,
  decode: decode,
  
};
//Função com parâmetros de deslocamento e mensagem conforme as variáveis do arquivo index.js
function encode(deslocamento, mensagem) {
  //variavél que irá receber o resultado
  let resultado = "" ;
  let formula;
  for (let i=0; mensagem.length >i; i++) {
    //confere se os caracteres recebidos são maiúsculos
    if (mensagem.charCodeAt(i) >=65 && mensagem.charCodeAt(i) <=90) {
      //confere se o offset é positivo e codifica a mensagem 
      if (deslocamento >=0) {
        formula = ((mensagem.charCodeAt(i) -65 + deslocamento)% 26)+65;
        resultado += String.fromCharCode(formula);
      } 
      //se o offset for negativo ele e codifica a mensagem
      else {
        formula = ((mensagem.charCodeAt(i) -90 + deslocamento)% 26)+90;
        resultado += String.fromCharCode(formula);
      }
    }
    //confere se os caracteres recebidos são minúsculos
    else if (mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <=122) {
      //confere se o offset é positivo e codifica a mensagem
      if (deslocamento >=0) {
        formula = ((mensagem.charCodeAt(i) -97 + deslocamento)% 26)+97;
        resultado += String.fromCharCode(formula);
      } 
      else {
        //se o offset for negativo ele codifica os caracteres 
        formula = ((mensagem.charCodeAt(i) -122 + deslocamento)% 26)+122;
        resultado += String.fromCharCode(formula);
      }
    }
    //se for símbolo não há alteração 
    else {
      formula = (mensagem.charCodeAt(i));
      resultado += String.fromCharCode(formula);
    }
  }
  //resultado final da mensagem
  return resultado;
}

function decode(deslocamento, mensagem) {
  let decoderesult = "" ;
  let formula;
  for (let i=0; mensagem.length >i; i++) {  
    if (mensagem.charCodeAt(i) >=65 && mensagem.charCodeAt(i) <=90) {
      if (deslocamento >=0) {
        formula = ((mensagem.charCodeAt(i) - 90 - deslocamento)% 26)+90;
        decoderesult += String.fromCharCode(formula);
      } 
      else {
        formula = ((mensagem.charCodeAt(i) - 65 - deslocamento)% 26)+65;
        decoderesult += String.fromCharCode(formula);
      }
    } 
    else if (mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <=122) {
      if (deslocamento >=0) {
        formula = ((mensagem.charCodeAt(i) - 122 - deslocamento)% 26)+122;
        decoderesult += String.fromCharCode(formula);
      } 
      else {
        formula = ((mensagem.charCodeAt(i) - 97 - deslocamento)% 26)+97;
        decoderesult += String.fromCharCode(formula);
      }
    }
    else {
      formula = (mensagem.charCodeAt(i));
      decoderesult += String.fromCharCode(formula);
    }
  }
  return decoderesult;
}