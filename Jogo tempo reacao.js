var tela = document.getElementById("tela_reacao");
var quadrado = document.getElementById("quadrado");
var circulo = document.getElementById("circulo");
var triangulo = document.getElementById("triangulo");



quadrado.addEventListener("click", function(){

    quadrado.remove();
    setTimeout( function(){

        tela.appendChild(quadrado);
    }, 5000);
});

circulo.addEventListener("click", function(){

    circulo.remove();
    setTimeout( function(){

        tela.appendChild(circulo);
    }, 5000);
});

triangulo.addEventListener("click", function(){

    triangulo.remove();
    setTimeout( function(){

        tela.appendChild(triangulo);
    }, 5000);
});

/*setTimeout( function(){

    document.body.appendChild(quadrado);
}, 5000);*/