//variables 
let btnInfo = document.getElementById("btnInfo");
let hNombre = document.getElementById("hNombre");
let hEdad = document.getElementById("hEdad");
let hDocumento = document.getElementById("hDocumento");
let hTelefono = document.getElementById("hTelefono");
//funsiones
const guardarDatos = () => { //aqui se declara la funsion
    let nombre = prompt("ingrese su nombre");
    console.log(nombre);
    if (nombre === "") {//validacion si el usuario le daclick en acepttar sin ingresar datos
        alert("favor escribir sus datos");
    } else {
        hNombre.innerHTML = "nombre: " + nombre;
    }

    let edad = prompt("ingrese su edad");
    console.log(edad);
    if (edad === "") {//validacion si el usuario le daclick en acepttar sin ingresar datos
        alert("favor escribir sus datos");
    } else {
        hEdad.innerHTML = "edad: " + edad;
    }
    
    let documento = prompt("ingrese su documento");
    console.log(documento);
    if (documento === "") {//validacion si el usuario le daclick en acepttar sin ingresar datos
        alert("favor escribir sus datos");
    } else {
        hDocumento.innerHTML = "documento: " + documento;
    }
    
    let telefono = prompt("ingrese su telefono");
    console.log(telefono);
    if (telefono === "") {//validacion si el usuario le daclick en acepttar sin ingresar datos
        alert("favor escribir sus datos");
    } else {
        hTelefono.innerHTML = "telefono: " + telefono;
    }
    
    
}
//onclicks

btnInfo.onclick = function () {
    guardarDatos();//esta es la manera en la que se invoca
}