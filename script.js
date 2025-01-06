// Array para armazenar os dados
let listaDados = JSON.parse(localStorage.getItem('listaDados')) || [];

// Função para salvar e exibir os dados
function salvarDados(event) {
    event.preventDefault();  // Impede o envio do formulário e recarga da página

    // Pegando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const apartamento = document.getElementById('apartamento').value;
    const quantidade = document.getElementById('quantidade').value;
    const data = document.getElementById('data').value;
    const codigo = document.getElementById('codigo').value;

    // Criando o objeto com os dados do formulário
    const dado = {
        nome: nome,
        apartamento: apartamento,
        quantidade: parseInt(quantidade, 10), // Certificando-se de que é um número
        data: data,
        codigo: codigo
    };

    // Adicionando o novo dado ao array
    listaDados.push(dado);

    // Salvando o array atualizado no LocalStorage
    localStorage.setItem('listaDados', JSON.stringify(listaDados));

    // Atualizando a lista de dados na interface
    atualizarLista();

    // Limpando o formulário
    document.getElementById('formCadastro').reset();
}

// Função para atualizar a lista de dados exibidos
function atualizarLista() {
    const lista = document.getElementById('listaDados');
    lista.innerHTML = '';  // Limpa a lista antes de atualizá-la

    let totalQuantidade = 0;  // Inicializa o total de quantidade

    // Iterando sobre todos os dados salvos no array e adicionando à lista
    listaDados.forEach((dado, index) => {
        totalQuantidade += dado.quantidade;  // Soma a quantidade

        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Nome:</strong> ${dado.nome}<br>
            <strong>Apartamento:</strong> ${dado.apartamento}<br>
            <strong>Quantidade:</strong> ${dado.quantidade}<br>
            <strong>Data:</strong> ${dado.data}<br>
            <strong>Código do Produto:</strong> ${dado.codigo}<br>
            <button onclick="excluirDado(${index})">Excluir</button>
        `;
        lista.appendChild(item);
    });

    // Exibe o total de quantidade
    const totalDisplay = document.getElementById('totalQuantidade');
    totalDisplay.textContent = `Quantidade Total: ${totalQuantidade}`;
}

// Função para excluir um dado da lista
function excluirDado(index) {
    listaDados.splice(index, 1);  // Remove o dado do array

    // Atualizando o LocalStorage
    localStorage.setItem('listaDados', JSON.stringify(listaDados));

    atualizarLista();  // Atualiza a lista exibida
}

// Função para exportar os dados para um arquivo de texto
function exportarParaTxt() {
    let totalQuantidade = listaDados.reduce((total, dado) => total + dado.quantidade, 0);

    const conteudo = listaDados.map(dado => 
        `Nome: ${dado.nome}\nApartamento: ${dado.apartamento}\nQuantidade: ${dado.quantidade}\nData: ${dado.data}\nCódigo do Produto: ${dado.codigo}\n\n`
    ).join('');

    const conteudoCompleto = `${conteudo}Quantidade Total: ${totalQuantidade}`;

    const blob = new Blob([conteudoCompleto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_salvos.txt';
    link.click();
}

// Inicializa a lista de dados ao carregar a página
atualizarLista();

// Adicionando o evento de envio do formulário
document.getElementById('formCadastro').addEventListener('submit', salvarDados);

// Adicionando o evento para exportar os dados
document.getElementById('exportarBtn').addEventListener('click', exportarParaTxt);
