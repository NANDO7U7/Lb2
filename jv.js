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

var elemento = document.getElementById("miElemento");

elemento.addEventListener("mouseover", function() {
  elemento.style.backgroundColor = "yellow";
});

  
//Evento focus

const input = document.querySelector('#curso');
    
input.addEventListener('focus', (e) =>{
    console.log(e);
    console.dir(e.target);
    e.target.style.background = "tomato";
})

 input.addEventListener('blur', (e) =>{
    e.target.style.background = "white";
 })

 function foco (objeto){
    console.log(objeto);
    objeto.style.background = "yellow";
 }




