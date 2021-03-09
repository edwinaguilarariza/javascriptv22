//dom document object model
//variables

let btnAlerta = document.getElementById("btnAlerta");

const ventanaAlerta = () => {
    alert("prueba");
}

//onclicks evento
btnAlerta.onclick = function() {
    ventanaAlerta();
}
