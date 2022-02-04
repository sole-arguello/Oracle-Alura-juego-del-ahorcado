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

//------------------- Funcion de comprobar letras --------------------------
let input = document.getElementById("letra"); //capura el input
let errores = document.getElementById("letras-erradas");

function comprobarLetra(){
    
    let letraIngresada = input.value.toUpperCase();
    console.log(letraIngresada);
    palabraOculta = palabraOculta.toUpperCase();
    
    let adivinada = ""; // cadena vacia, donde se guardara la palabra oculta
    let fallidos = true;
    //recorro la palabra
    for(let i=0; i<palabraOculta.length; i++){
        
        // comparo la letra ingresada = palabra oculta
        if(letraIngresada == palabraOculta[i]){
            //si coincide que muestre la letra con espacios
            adivinada = adivinada + letraIngresada + " ";
            fallidos = false;
        }
        else{
             //sino que muestre el guion bajo
             adivinada = adivinada + palabraAdivinada[i*2] + " ";
        }
              
    }
    //---------- valida intentos y muetra los fallidos ---------- 
    // si fallo!
    if(fallidos){
        let resultadoErrores = mostrarLetrasErradas(letraIngresada);
        if(resultadoErrores){
            intentos--;//resto
            dibujarAhorcado(intentos);
            document.getElementById("intentos").innerHTML = 
            "Quedan: " + intentos + " intentos";//actualizo
        }
    }
    console.log(palabraAdivinada);
    console.log("palabra adivinada  " + adivinada);
    
    palabraAdivinada = adivinada;
     //muestra la palabra encontrada
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
//------------------------ valido si gano o perdio ---------------------------------------------------------
    if(intentos==0){
        alert("perdiste :( ");//perdio
        
    }
    
    //search retorna un -1, valido si es la letra encontrada o guion
    if(palabraAdivinada.search("_") == -1){
        
        alert("Ganaste :D");
    }
  
    //limpia el input
    document.getElementById("letra").value = "";
    //enfoca el cursor en el input
    document.getElementById("letra").focus();
}


