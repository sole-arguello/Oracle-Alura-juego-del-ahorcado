//boton iniciar juego
document.getElementById("iniciar-juego").addEventListener("click",() =>{

    palabraAdivinada ="";
    limpiarCambas();
    guionesDePalabra();
//------reinicio todas las variables
    errores.innerHTML = "";
    letrasErradas = [];
    letrasRepetidas = [];
    intentos = 9;
    document.getElementById("intentos").innerHTML = 
    "Quedan: " + intentos + " intentos";//actualizo
    errores.hidden = false;// en html es true, cambio para que se vea
    input.hidden = false;
    btnComprobar.hidden = false;  
    btnComprobar.disabled = false;// desabilito y habilito
});

//boton agregar palabras
let btnAgregarPalabras = document.getElementById("nueva-palabra");
btnAgregarPalabras.addEventListener("click", ()=>{

    agregarPalabra(palabras);
});

//boton comprobar con validacion, no permite enviar el input vacio
let btnComprobar = document.getElementById("boton");
btnComprobar.addEventListener("click", ()=>{
    //verifico que no ingrese vacio el input
    if(input.value == ""){
        alert("vacio");
    }else{
        comprobarLetra();
    }
    document.getElementById("letra").focus();
});
