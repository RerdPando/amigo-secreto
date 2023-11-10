let listaDeAmigos = ['Lucas'];

function adicionarParticipante() {
    let nomeAdicionado = document.getElementById('nome-amigo').value;

    //verifica se o sobrenome foi adicionado
    if (!nomeAdicionado.includes(' ')) {
        alert('Você precisa adicionar um sobrenome!');
        return;
    };

    //Verifica se o nome que será adicionado já contem na listaDeAmigos
    if (listaDeAmigos.some(nome => nome.toLowerCase() === nomeAdicionado.toLowerCase())) {
        alert('Esse nome já foi adicionado!');
    } else {
        listaDeAmigos.push(nomeAdicionado);
    };

    if (listaDeAmigos.length === 2) {
        let selecionarBotao = document.getElementById('sortear');
        selecionarBotao.disabled = false;
    };
};

function sortearParticipantes() {
    let selecionarBotao = document.getElementById('sortear');
    selecionarBotao.disabled = true;
}