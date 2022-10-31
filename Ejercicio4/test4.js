let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let b = 10;

while(b >= 2){
    console.log("El valor de b es: " + b);
    b--;
}

let respuesta;

while (respuesta != "4") {
    let pregunta = prompt("¿Cuanto es 2 + 2?")
    respuesta = pregunta;
}
if(respuesta == 4){
    alert("Felicitaciones");
}