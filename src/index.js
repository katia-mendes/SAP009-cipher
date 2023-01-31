import cipher from './cipher.js';


const criptografar = () => {
  const deslocamento = parseInt(document.getElementById("deslocamento").value); 
  const mensagem = document.getElementById("mensagem").value;
  const mensagemMaiusculo = mensagem.toUpperCase(mensagem);
  let resultado = '';
  resultado = cipher.encode(deslocamento, mensagemMaiusculo); 
  document.getElementById('resultado').innerHTML = resultado;
}
document.getElementById("criptografar").addEventListener("click", criptografar);


const descriptografar = () => {
  const deslocamento = parseInt(document.getElementById("deslocamento").value);
  const mensagem = document.getElementById("mensagem").value;
  const mensagemMaiusculo = mensagem.toUpperCase(mensagem);
  let resultado = '';
  resultado = cipher.decode(deslocamento, mensagemMaiusculo); 
  document.getElementById('resultado').innerHTML = resultado;
}
document.getElementById("descriptografar").addEventListener("click", descriptografar);

const limpar = () => {
  document.querySelector('#mensagem').value = '';
  document.querySelector('#deslocamento').value = '';
  document.getElementById('resultado').innerHTML = '';
}
document.getElementById("limpar").addEventListener("click", limpar);