import cipher from "cipher.js";

let criptografia = (categoria) => { 
    let deslocamento = parseInt(document.getElementById("deslocamento").value);
    let mensagem = document.getElementById("mensagem").value;
    let resultado = '';
    if(categoria == 'cifrar'){ 
        resultado = cipher.encode(deslocamento, mensagem); 
    } else{
        resultado = cipher.decode(deslocamento, mensagem); 
    }
    document.getElementById('resultado').innerHTML = resultado;
}
console.log(criptografia('cifrar'));





