const cipher = {
  encode(deslocamento, mensagem) { 
    let fraseFinal = [];
    let charDesloc = '';
    let charCipher = '';

    for(let letra in mensagem) {
      let char = mensagem.charCodeAt(letra);
      char = parseInt(char);
      while (deslocamento < 0) {
        deslocamento = deslocamento + 26; 
      }
      if (char >= 65 && char <= 90) {
        charDesloc = (((char - 65) + deslocamento) % 26) = 65;
        charCipher = String.fromCharCode(charDesloc);
        fraseFinal.push(charCipher);

      } else {
        charCipher = String.fromCharCode(char);
        fraseFinal.push(charCipher);
      }
    }
  return fraseFinal.join('');
  },

  decode(deslocamento, mensagem) { 
    let fraseFinal = [];
    let charDesloc = '';
    let charCipher = '';

    for(let letra in mensagem) {
      let char = mensagem.charCodeAt(letra);
      char = parseInt(char);
      while (deslocamento < 0) {
        deslocamento = deslocamento + 26; 
      }
      if (char >= 65 && char <= 90) {
        charDesloc = (((char - 90) + deslocamento) % 26) = 90;
        charCipher = String.fromCharCode(charDesloc);
        fraseFinal.push(charCipher);

      } else {
        charCipher = String.fromCharCode(char);
        fraseFinal.push(charCipher);
      }
    }
  return fraseFinal.join('');
  } 
};

export default cipher;
