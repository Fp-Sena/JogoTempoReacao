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

           
            quadrado.addEventListener("click", function(){
            
                quadrado.remove();

                setTimeout( function(){
                
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;

                    quadrado.style.position = "absolute";
                    quadrado.style.top = novaPosicaoTop + "%";
                    quadrado.style.left = novaPosicaoLeft + "%";

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    quadrado.style.backgroundColor = corAleatoria;
                    tela.appendChild(quadrado);
                }, 1000);
            });

            circulo.addEventListener("click", function(){

                circulo.remove();

                setTimeout(function() {
                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;

                    circulo.style.position = "absolute";
                    circulo.style.top = novaPosicaoTop + "%";
                    circulo.style.left = novaPosicaoLeft +"%";

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    circulo.style.backgroundColor = corAleatoria;

                    tela.appendChild(circulo);
                },1000);
            });

            triangulo.addEventListener("click", function(){

                triangulo.remove();
                setTimeout(function() {

                    novaPosicaoTop = Math.floor(Math.random() * (limiteMinimoTop - limiteMaximoTop +1)) + limiteMaximoTop;
                    novaPosicaoLeft = Math.floor(Math.random() * (limiteMinimoLeft - limiteMaximoLeft +1)) + limiteMaximoLeft;

                    triangulo.style.position = "absolute";
                    triangulo.style.top = novaPosicaoTop + "%";
                    triangulo.style.left = novaPosicaoLeft +"%";

                    corAleatoria = '#'+Math.floor(Math.random()*16777215).toString(16);
                    triangulo.style.borderBottomColor = corAleatoria;

                    tela.appendChild(triangulo);
                }, 1000);
            });
