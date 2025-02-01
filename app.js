let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (nome === "") {
        let resultado = document.getElementById("resultado");
        alert("Por favor, insira um nome antes de adicionar.");
        return;
    }else{
        amigos.push(nome);
        atualizaLista();
    }

   //console.log(nome);
    //console.log(amigos);
    input.value = "";
}

function atualizaLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerText = "Adicione pelo menos um amigo antes de sortear.";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    resultado.innerText = `O amigo sorteado foi: ${amigoSorteado} !`;
}
