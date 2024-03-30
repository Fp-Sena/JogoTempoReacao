let quadrado = document.getElementById("quadrado");
let circulo = document.getElementById("circulo");
let triangulo = document.getElementById("triangulo");

circulo.remove();
triangulo.remove();

quadrado.onclick = function(){
    quadrado.remove();

    aoClicarNaForma();
};

triangulo.onclick = function(){
    triangulo.remove();

    aoClicarNaForma();
};

circulo.onclick = function(){
    circulo.remove();

    aoClicarNaForma();
};