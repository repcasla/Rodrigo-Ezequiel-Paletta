
function accion(){
    console.log("funciona esto?")
    var despliegue = document.getElementsByClassName("nav-enlace");
    for(var i = 0; i < despliegue.length; i++){
        despliegue[i].classList.toggle ("desaparece");
    }
}; 



