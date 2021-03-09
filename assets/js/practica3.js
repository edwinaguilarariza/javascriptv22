//variables 
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");
//funsiones
const guardarNombre = () => { //aqui se declara la funsion
    let nombre = prompt("ingrese su nombre");
    console.log(nombre);
    if (nombre === "") {//validacion si el usuario le daclick en acepttar sin ingresar datos
        alert("favor escribir su nombre antes de aceptar");
    } else {
        hNombre.innerHTML = "hola: " + nombre;
    }
    
}
//onclicks

btnNombre.onclick = function () {
    guardarNombre();//esta es la manera en la que se invoca
}