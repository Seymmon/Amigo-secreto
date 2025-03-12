//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];


function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ''){
       return alert('Insira um nome')
    }else{
        listaAmigos.push(nomeAmigo);
    }
    
    console.log(listaAmigos)
    
}

function imprimirLista(){
    let lista = document.getElementById("listaAmigos");
    lista.push(listaAmigos)
}