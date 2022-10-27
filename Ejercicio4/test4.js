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
    let pregunta = prompt("Para ver el contenido de esta clase debe responder correctamente la siguiente pregunta. ¿Cuanto es 2 + 2?")
    respuesta = pregunta;
}