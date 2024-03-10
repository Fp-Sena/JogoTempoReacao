var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");

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
let tamanhoTrianguloLaterais



    circulo.remove();
    triangulo.remove();


                
                quadrado.onclick = function(){

                    tamanho=Math.floor(Math.random() * 200);
                    tamanhoTrianguloLaterais=Math.floor(Math.random() * 100);   
                    tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                    quadrado.remove();
                
                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor(Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };














                triangulo.onclick = function(){

                    tamanho=Math.floor(Math.random() * 200);
                    tamanhoTrianguloLaterais=Math.floor(Math.random() * 100);   
                    tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                    triangulo.remove();

                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo *1000);
                };











                circulo.onclick = function(){

                    tamanho=Math.floor(Math.random() * 200);
                    tamanhoTrianguloLaterais=Math.floor(Math.random() * 100);   
                    tamanhoTrianguloBase=tamanhoTrianguloLaterais + tamanhoTrianguloLaterais*30/100;

                    circulo.remove();

                setTimeout ( function(){

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;
                
                    num_1a3 = Math.floor(Math.random() * 3) + 1;

                   if(num_1a3 == 1){

                        quadrado.style.position = "absolute";
                        quadrado.style.top = novaPosicaoTop + "%";
                        quadrado.style.left = novaPosicaoLeft + "%";

                        quadrado.style.backgroundColor = corAleatoria;

                        quadrado.style.width = tamanho+"px";
                        quadrado.style.height = tamanho+"px";

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        circulo.style.width = tamanho+"px";
                        circulo.style.height = tamanho+"px";

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderLeft = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderRight = tamanhoTrianguloLaterais+"px solid transparent";
                        triangulo.style.borderBottom = tamanhoTrianguloBase+"px solid green";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };