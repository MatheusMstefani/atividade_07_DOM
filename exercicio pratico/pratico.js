function mudarCorFundo() {
    const cores = ['grey', 'beige','red']; 
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)]; 
    document.body.style.backgroundColor = corAleatoria; 
}

document.getElementById('btnMudarCor').addEventListener('click', mudarCorFundo);

function mostrarTexto() {
    const texto = document.getElementById('entradaTexto').value;
    document.getElementById('textoExibido').textContent = texto;
}

function alterarContador(valor) {
    var contador = document.getElementById("contador");  
    var atual = parseInt(contador.innerText);
    contador.innerText = atual + valor;
}

function mudarCorComEnter(event) {
            if (event.key === 'Enter') {
                const cor = document.getElementById('corInput').value;
                document.body.style.backgroundColor = cor;
            }
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
        if (nome && email && mensagem) {
        const dados = `Nome: ${nome} <br>Email: ${email} <br>Mensagem: ${mensagem}`;
        document.getElementById('dadosFormulario').innerHTML = dados;
    }   else {
            alert('Por favor, preencha todos os campos!');
    }
}