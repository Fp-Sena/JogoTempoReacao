let tela = document.getElementById("tela_reacao");
let tempoClick = document.getElementById("Time");
let tempo01 = document.getElementById("tempo01");
let tempo02 = document.getElementById("tempo02");
let tempo03 = document.getElementById("tempo03");
let tempo04 = document.getElementById("tempo04");
let tempo05 = document.getElementById("tempo05");

let limiteMaximoTop = 71;
let limiteMinimoTop = 22;
let limiteMaximoLeft = 72;
let limiteMinimoLeft = 5;

let novaPosicaoTop = 0;
let novaPosicaoLeft = 0;
let corAleatoria = 0;
let formaAleatoria = 0;

let num_0a2;

let record01=100;
let record02=100;
let record03=100;
let record04=100;
let record05=100;

let tempo;
let tempoMax = 4;
let tempoMin = 4;

let tamanho;
let tamanhoMax = 200;
let tamanhoMin = 200;
let tamanhoMaxTriangulo = 150;
let tamanhoMinTriangulo = 150;
let tamanhoTrianguloBase;
let tamanhoTrianguloLaterais;

let EpochPasada;

let contagem = 0;

let formas = [quadrado, circulo, triangulo];

function aoClicarNaForma() {
                        
    gravandoRecords();

    setTimeout ( function(){

        corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
        novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
        novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;

        num_0a2 = Math.floor(Math.random() * 3);

        formas[num_0a2].style.position = "absolute";
        formas[num_0a2].style.top = novaPosicaoTop + "%";
        formas[num_0a2].style.left = novaPosicaoLeft + "%";

        if(num_0a2 == 0 || num_0a2 == 1){

            tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

            formas[num_0a2].style.backgroundColor = corAleatoria;
            formas[num_0a2].style.width = tamanho+"px";
            formas[num_0a2].style.height = tamanho+"px";
        }
        else if(num_0a2 == 2){

            tamanhoTrianguloLaterais=Math.floor(Math.random() * (tamanhoMinTriangulo - tamanhoMaxTriangulo +1)) + tamanhoMaxTriangulo;   
            tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

            formas[num_0a2].style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
            formas[num_0a2].style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
            formas[num_0a2].style.borderBottom = tamanhoTrianguloBase+"px solid";
            formas[num_0a2].style.borderBottomColor = corAleatoria;
        }
        tela.appendChild(formas[num_0a2]);
        EpochPasada = Date.now();

        dificuldadeDoJogo();

        tempo = Math.floor(Math.random() * (tempoMin - tempoMax +1)) + tempoMax;
    }, tempo * 1000);
}

function gravandoRecords() {
    tempoClick.innerHTML=(Date.now()-EpochPasada)/1000;

    if((Date.now()-EpochPasada)/1000<record01){
        tempo01.innerHTML=(Date.now()-EpochPasada)/1000;

        record05=record04;
        tempo05.innerHTML=record05;
        record04=record03;
        tempo04.innerHTML=record04;
        record03=record02;
        tempo03.innerHTML=record03;
        record02=record01;
        tempo02.innerHTML=record02;

        record01=(Date.now()-EpochPasada)/1000;
    }
    else if((Date.now()-EpochPasada)/1000<record02){
        tempo02.innerHTML=(Date.now()-EpochPasada)/1000;

        record05=record04;
        tempo05.innerHTML=record05;
        record04=record03;
        tempo04.innerHTML=record04;
        record03=record02;
        tempo03.innerHTML=record03;

        record02=(Date.now()-EpochPasada)/1000;
    }
    else if((Date.now()-EpochPasada)/1000<record03){
        tempo03.innerHTML=(Date.now()-EpochPasada)/1000;

        record05=record04;
        tempo05.innerHTML=record05;
        record04=record03;
        tempo04.innerHTML=record04;

        record03=(Date.now()-EpochPasada)/1000;
    }
    else if((Date.now()-EpochPasada)/1000<record04){
        tempo04.innerHTML=(Date.now()-EpochPasada)/1000;

        record05=record04;
        tempo05.innerHTML=record05;

        record04=(Date.now()-EpochPasada)/1000;
    }
    else if((Date.now()-EpochPasada)/1000<record05){
        tempo05.innerHTML=(Date.now()-EpochPasada)/1000;

        record05=(Date.now()-EpochPasada)/1000;
    }
    
    contagem++;
}

function dificuldadeDoJogo() {
    if(contagem==5){
        if(tempoMin!=0){
            tempoMin=tempoMin-2;
        }
        else if(tempoMin==0 && tempoMax!=2){
            tempoMax=tempoMax-2;
        }


        if(tamanhoMin!=20){
            tamanhoMin=tamanhoMin-36;
            tamanhoMinTriangulo=tamanhoMinTriangulo-25;
        }
        else if(tamanhoMax!=56){
            tamanhoMax=tamanhoMax-36;
            tamanhoMaxTriangulo=tamanhoMaxTriangulo-20;
        }
        contagem=0;
    }
}