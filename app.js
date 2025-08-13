    // Amigo Secreto

    // Adicionar nomes
    // Validar entrada
    // Atualizar lista na tela
    // Sortear amigo secreto

    // Armazena os nomes digitados pelo usuário
let amigos = [];

    // Adiciona um amigo à lista.

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação de campo vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = '';

    // Atualiza a lista na tela
    atualizarLista();

    // Aparecer lista no console
    console.log('Lista de amigos:', amigos);
}

    // Atualiza a lista de amigos exibida no HTML.
    // Limpa o conteúdo atual
    // Cria <li> para cada nome do array
 
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista antes de renderizar
    lista.innerHTML = '';

    // Adiciona cada nome como um <li>
    amigos.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}


     // Sorteia um amigo secreto da lista e exibe o resultado.
 
function sortearAmigo() {
    // Validação: lista vazia
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    // Gera índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}