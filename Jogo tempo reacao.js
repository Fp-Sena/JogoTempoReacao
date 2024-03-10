var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");
var tempoClick = document.getElementById("Time");

var limiteMaximoTop = 75;
var limiteMinimoTop = 19;
var limiteMaximoLeft = 87;
var limiteMinimoLeft = 1;

let novaPosicaoTop = 0;
let novaPosicaoLeft = 0;
let corAleatoria = 0;
let formaAleatoria = 0;

let num_1a3;

let tempo;

let tamanho;
let tamanhoTrianguloBase;
let tamanhoTrianguloLaterais;

let EpochPasada;

    circulo.remove();
    triangulo.remove();


                quadrado.onclick = function(){

                    quadrado.remove();

                    tempoClick.innerHTML=(Date.now()-EpochPasada)/1000;

                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                    
                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (20 - 100 +1)) + 100;   
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


                    tempo = Math.floor(Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };














                triangulo.onclick = function(){

                    triangulo.remove();

                    tempoClick.innerHTML=(Date.now()-EpochPasada)/1000;

                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (20 - 100 +1)) + 100;     
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


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo *1000);
                };











                circulo.onclick = function(){

                    circulo.remove();

                    tempoClick.innerHTML=(Date.now()-EpochPasada)/1000;

                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanho=Math.floor(Math.random() * (20 - 200 +1)) + 200;

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

                        tamanhoTrianguloLaterais=Math.floor(Math.random() * (20 - 100 +1)) + 100;     
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


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };