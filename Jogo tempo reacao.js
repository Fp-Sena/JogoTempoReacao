var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");

var limiteMaximoTop = 84;
var limiteMinimoTop = 20;
var limiteMaximoLeft = 91;
var limiteMinimoLeft = 1;

let novaPosicaoTop = 0;
let novaPosicaoLeft = 0;
let corAleatoria = 0;
let formaAleatoria = 0;

let num_1a3;

let tempo;

    circulo.remove();
    triangulo.remove();


                
                quadrado.onclick = function(){

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

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor(Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };














                triangulo.onclick = function(){

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

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo *1000);
                };











                circulo.onclick = function(){

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

                        tela.appendChild(quadrado);

                    }

                    else if(num_1a3 == 2){

                        circulo.style.position = "absolute";
                        circulo.style.top = novaPosicaoTop + "%";
                        circulo.style.left = novaPosicaoLeft +"%";

                        circulo.style.backgroundColor = corAleatoria;

                        tela.appendChild(circulo);
                    }

                    else if(num_1a3 == 3){

                        triangulo.style.position = "absolute";
                        triangulo.style.top = novaPosicaoTop + "%";
                        triangulo.style.left = novaPosicaoLeft +"%";

                        triangulo.style.borderBottomColor = corAleatoria;

                        tela.appendChild(triangulo);
                    }


                    tempo = Math.floor( Math.random() * 3) + Math.random();
                }, tempo * 1000);
                };