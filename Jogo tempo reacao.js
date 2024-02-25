var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");



quadrado.addEventListener("click", function(){

    quadrado.remove();
});

circulo.addEventListener("click", function(){

    circulo.remove();
})

triangulo.addEventListener("click", function(){

    triangulo.remove();
})