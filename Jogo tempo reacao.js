var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");


// Usando um array - Um array e um objeto em que as chaves sao as posicoes
var formas = [quadrado, circulo, triangulo];

circulo.remove();
triangulo.remove();

quadrado.onclick = function () {
  quadrado.remove();

  onClickNaForma()
};

triangulo.onclick = function () {
  triangulo.remove();

  onClickNaForma()
};

circulo.onclick = function () {
  circulo.remove();

  onClickNaForma()
};