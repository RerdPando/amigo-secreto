let listaDeAmigos = [];

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
        if (listaDeAmigos.length === 1) {
            document.getElementById('lista-amigos').textContent = nomeAdicionado;
        } else {
            document.getElementById('lista-amigos').textContent += `, ${nomeAdicionado}`;
        };
    };



    if (listaDeAmigos.length === 2) {
        let selecionarBotao = document.getElementById('sortear');
        selecionarBotao.disabled = false;
    };
};

function sortearParticipantes() {
    embaralha(listaDeAmigos);

    for (i = 0; i < listaDeAmigos.length; i++) {

        let listaDeSorteados = document.getElementById('lista-sorteio');

        if (i == (listaDeAmigos.length - 1)) {
            listaDeSorteados.innerHTML += `${listaDeAmigos[i]} --> ${listaDeAmigos[0]}<br>`;
        } else {
            listaDeSorteados.innerHTML += `${listaDeAmigos[i]} --> ${listaDeAmigos[i + 1]}<br>`;
        }
    }
};

function reiniciar() {
    listaDeAmigos = [];
    let selecionarBotao = document.getElementById('sortear');
    selecionarBotao.disabled = false;
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    nomeAdicionado = document.getElementById('nome-amigo').value = '';
};
function embaralha(lista) {

    let indice = lista.length

    while (indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice]];
    };
};