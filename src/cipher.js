window.cipher = {
  encode: encode,
  decode: decode,
  
};

function encode(mensagem, deslocamento){
  let resultado = ""
    for  (let i=0; mensagem.length >i; i++){
    let formula = ((mensagem.charCodeAt(i)-65 + deslocamento)% 26)+65;
    resultado += String.fromCharCode(formula);
    }
return resultado    
}

function decode(mensagem, deslocamento){
  let decoderesult = ""
    for  (let i=0; mensagem.length >i; i++){
    let formula = ((mensagem.charCodeAt(i)-65 + deslocamento)% 26)+65;
    decoderesult += String.fromCharCode(formula);
    }
return decoderesult  
}
/*window.cipher = {

encode: encode;
//encoda mensagem, deslocamento
decode: decode;
  // desencoda mensagem, delocamento
};

cipherEncode (p1,p2)
alert (p1,p2)

CipherEncode (parametro1, parametro2)

alert (meuTexto, chave)*/