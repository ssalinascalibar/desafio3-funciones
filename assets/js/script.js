/* function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow' 
}

ele = document.getElementById("ele1") 
ele.addEventListener("click", pintar); */

//Requerimiento 3.1
// funcion anónima
ele = document.getElementById("ele1")

ele.addEventListener("click", function() {
    ele.style.backgroundColor = 'yellow'
});

//Requerimiento 3.2
ele2 = document.getElementById("ele2")
ele2.style.backgroundColor = 'green'

function pintar(color){
    ele2.style.backgroundColor = color 
}

ele2.addEventListener("click", function(){ pintar('yellow') });