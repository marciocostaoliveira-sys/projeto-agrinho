const perguntas = [

{
    pergunta: "Qual atitude ajuda a economizar água?",

    opcoes: [
        "Deixar a torneira aberta",
        "Tomar banhos rápidos",
        "Desperdiçar água"
    ],

    correta: 1
},

{
    pergunta: "Qual energia é renovável?",

    opcoes: [
        "Petróleo",
        "Energia solar",
        "Carvão"
    ],

    correta: 1
},

{
    pergunta: "O que significa reciclar?",

    opcoes: [
        "Reaproveitar materiais",
        "Poluir rios",
        "Jogar lixo na rua"
    ],

    correta: 0
}

];

let perguntaAtual = 0;

let pontos = 0;

function carregarPergunta(){

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").innerHTML =
    pergunta.pergunta;

    const opcoesDiv =
    document.getElementById("opcoes");

    opcoesDiv.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice)=>{

        const botao =
        document.createElement("button");

        botao.innerHTML = opcao;

        botao.onclick = ()=> verificarResposta(indice);

        opcoesDiv.appendChild(botao);

    });

}

function verificarResposta(indice){

    if(indice === perguntas[perguntaAtual].correta){

        pontos++;

    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    }else{

        mostrarResultado();

    }

}

function mostrarResultado(){

    document.getElementById("pergunta").innerHTML =
    "Quiz Finalizado!";

    document.getElementById("opcoes").innerHTML = "";

    document.getElementById("resultado").innerHTML =
    "Você acertou " +
    pontos +
    " de " +
    perguntas.length +
    " perguntas! 🌱";

}

carregarPergunta();
