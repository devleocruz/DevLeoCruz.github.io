function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('conteudo').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo:', error);
        });
}