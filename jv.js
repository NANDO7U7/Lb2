//elementos click
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var caja = document.getElementById("caja");
var caja1 = document.getElementById("caja1");
var caja2 = document.getElementById("caja2");

function cambiarColor(caja, color) {
  caja.style.backgroundColor = color;
}

btn.addEventListener("click", function() {
  cambiarColor(caja, "green");
});

btn1.addEventListener("click", function() {
  cambiarColor(caja1, "blue");
});

btn2.addEventListener("click", function() {
    cambiarColor(caja2, "yellow");
  });

  //elementos mauseover
var elemento1 = document.getElementById("elemento1");
var elemento2 = document.getElementById("elemento2");
var elemento3 = document.getElementById("elemento3");

function aplicarEstilo(elemento) {
  elemento.classList.add("estiloClasico");
}

elemento1.addEventListener("mouseover", function() {
  aplicarEstilo(elemento1);
});

elemento2.addEventListener("mouseover", function() {
  aplicarEstilo(elemento2);
});

elemento3.addEventListener("mouseover", function() {
  aplicarEstilo(elemento3);
});




