var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");
var tempoClick = document.getElementById("Time");
var tempo01 = document.getElementById("tempo01");
var tempo02 = document.getElementById("tempo02");
var tempo03 = document.getElementById("tempo03");
var tempo04 = document.getElementById("tempo04");
var tempo05 = document.getElementById("tempo05");


var limiteMaximoTop = 69;
var limiteMinimoTop = 18;
var limiteMaximoLeft = 84;
var limiteMinimoLeft = 1;

let novaPosicaoTop = 0;
let novaPosicaoLeft = 0;
let corAleatoria = 0;
let formaAleatoria = 0;

let num_1a3;


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
let tamanhoMaxTriangulo = 100;
let tamanhoTrianguloBase;
let tamanhoTrianguloLaterais;

let EpochPasada;

let contagem = 0;

    circulo.remove();
    triangulo.remove();


                quadrado.onclick = function(){

                    quadrado.remove();

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
                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 2){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 3){

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (tamanhoMin - tamanhoMaxTriangulo +1)) + tamanhoMaxTriangulo;   
                        tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);

                        EpochPasada = Date.now();
                    }

                    if(contagem==5){
                        if(tempoMin!=0){
                            tempoMin=tempoMin-2;
                        }
                        else if(tempoMin==0 && tempoMax!=2){
                            tempoMax=tempoMax-2;
                        }


                        if(tamanhoMin!=20){
                            tamanhoMin=tamanhoMin-36;
                        }
                        else if(tamanhoMax!=56){
                            tamanhoMax=tamanhoMax-36;
                            tamanhoMaxTriangulo=tamanhoMaxTriangulo-20;
                        }
                        contagem=0;
                    }

                    tempo = Math.floor(Math.random() * (tempoMin - tempoMax +1)) + tempoMax;
                }, tempo * 1000);
                };



















                triangulo.onclick = function(){

                    triangulo.remove();

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
                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 2){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 3){

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (tamanhoMin - tamanhoMaxTriangulo +1)) + tamanhoMaxTriangulo;     
                        tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);

                        EpochPasada = Date.now();
                    }
                    if(contagem==5){
                        if(tempoMin!=0){
                            tempoMin=tempoMin-2;
                        }
                        else if(tempoMin==0 && tempoMax!=2){
                            tempoMax=tempoMax-2;
                        }


                        if(tamanhoMin!=20){
                            tamanhoMin=tamanhoMin-36;
                        }
                        else if(tamanhoMax!=56){
                            tamanhoMax=tamanhoMax-36;
                            tamanhoMaxTriangulo=tamanhoMaxTriangulo-20;
                        }
                        contagem=0;
                    }

                    tempo = Math.floor(Math.random() * (tempoMin - tempoMax +1)) + tempoMax;
                }, tempo *1000);
                };











                circulo.onclick = function(){

                    circulo.remove();

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
                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 2){

                        tamanho=Math.floor(Math.random() * (tamanhoMin - tamanhoMax +1)) + tamanhoMax;

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);

                        EpochPasada = Date.now();
                    }

                    else if(num_1a3 == 3){

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (tamanhoMin - tamanhoMaxTriangulo +1)) + tamanhoMaxTriangulo;     
                        tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);

                        EpochPasada = Date.now();
                    }
                    if(contagem==5){
                        if(tempoMin!=0){
                            tempoMin=tempoMin-2;
                        }
                        else if(tempoMin==0 && tempoMax!=2){
                            tempoMax=tempoMax-2;
                        }


                        if(tamanhoMin!=20){
                            tamanhoMin=tamanhoMin-36;
                        }
                        else if(tamanhoMax!=56){
                            tamanhoMax=tamanhoMax-36;
                            tamanhoMaxTriangulo=tamanhoMaxTriangulo-20;
                        }
                        contagem=0;
                    }
                    tempo = Math.floor(Math.random() * (tempoMin - tempoMax +1)) + tempoMax;
                }, tempo * 1000);
                };