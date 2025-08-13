    // Amigo Secreto - (Estrutura inicial)
    // Array para armazenar os nomes dos amigos
  
    const amigos = [];
    
    function adicionarAmigo() {
        const input = document.getElementById('amigo');
        const nome = input.ariaValueMax.trim();

        // Validação de campo vazio
        if (nome === '') {
            alert('Por Favor, insira um nome válido');
            return;
        }

        // Adiciona o nome ao array
        amigos.push(nome);

        // Limpa o campo de entrada
        input.value = '';

        // Atualizar a lista na tela
        console.log('Lista de amigos:', amigos);
    }