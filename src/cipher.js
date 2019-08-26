window.cipher = {
  encode: encode,
  decode: decode,
  
};

function encode(deslocamento, mensagem) {
  let resultado = "" ;
  let formula;
  for (let i=0; mensagem.length >i; i++) {
    if (mensagem.charCodeAt(i) >=65 && mensagem.charCodeAt(i) <=90) {
      formula = ((mensagem.charCodeAt(i) -65 + deslocamento)% 26)+65;
      resultado += String.fromCharCode(formula);
    } else if (mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <=122) {
      formula = ((mensagem.charCodeAt(i) -97 + deslocamento)% 26)+97;
      resultado += String.fromCharCode(formula);
    } else if (mensagem.charCodeAt(i) >=32 && mensagem.charCodeAt(i)<=64) {
      formula = (mensagem.charCodeAt(i));
      resultado += String.fromCharCode(formula);
    }
  }
  return resultado;
}

function decode(deslocamento, mensagem) {
  let decoderesult = "" ;
  let formula;
  for (let i=0; mensagem.length >i; i++) {
    if (mensagem.charCodeAt(i)>=65 && mensagem.charCodeAt(i)<=90) {
      formula = ((mensagem.charCodeAt(i) - 90 - deslocamento)% 26)+90;
      decoderesult += String.fromCharCode(formula);
    } else if (mensagem.charCodeAt(i)>=97 && mensagem.charCodeAt(i) <=122) {
      formula = ((mensagem.charCodeAt(i) - 122 - deslocamento)%26)+122;
      decoderesult += String.fromCharCode(formula);
    } else if (mensagem.charCodeAt(i) >=32 && mensagem.charCodeAt(i)<=64) {
      formula = (mensagem.charCodeAt(i));
      decoderesult += String.fromCharCode(formula);
    }  
  }
  return decoderesult;
}
/*
((codigodaletraASC - 65 + deslocamento)% tamanhodoalfabeto)+codigoDaPrimeiraLetra
window.cipher = {

encode: encode;
//encoda mensagem, deslocamento
decode: decode;
  // desencoda mensagem, delocamento
};

cipherEncode (p1,p2)
alert (p1,p2)

CipherEncode (parametro1, parametro2)

alert (meuTexto, chave)*/