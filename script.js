//Clase jugador con sus puntos
class Jugador {
    constructor(){
        this.puntos;
    }
}

//Generamos un numero random para seleccionar la casilla
function casillaRandom(){
    let numero = Math.random()*8;
    return Math.round(numero+1);
}

//Funcion que devuelve true si se genera un enemigo ladron y false si es una anciana
function objetivoMalvado() {
    let numero = Math.round(Math.random()*10);
    let tipoEnemigo;

    if (numero>80) {
        tipoEnemigo=false
    }else{
        tipoEnemigo=true
    }
    return tipoEnemigo;
}

//Funciona que nos muestra el objetivo
function mostrarObjetivo() {

    debugger
    let num = casillaRandom();
    let  casillaElegida = `casilla${num}`;
    let casilla = document.getElementById(`c${num}`);
    console.log(casillaElegida);
    casilla.innerHTML = `Hola ${num}`;

}

mostrarObjetivo();




