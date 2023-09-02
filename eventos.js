function cartel(){
    alert("Hola!");
}
const div= document.getElementById("carteldiv")
div.addEventListener("click", function(event){
    alert("hola, soy el div!");
    event.stopPropagation();
})