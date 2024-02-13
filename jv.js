//cambia solo dando un click y asi se queda
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var caja1 = document.getElementById("caja1");
var caja2 = document.getElementById("caja2");

function cambiarColor(caja, color) {
  caja.style.backgroundColor = color;
}

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
//cambio dando click por click
 var btn = document.getElementById("btn"),
 caja = document.getElementById("caja")
 contador=0;
 
 function cambio()
 {
     if(contador==0)
     {
         caja.classList.add('azul');
         contador=1;
     }
      else{
         caja.classList.remove('azul');
         contador=0;
      }
     
 }
 
 
 btn.addEventListener("click",cambio,true)


