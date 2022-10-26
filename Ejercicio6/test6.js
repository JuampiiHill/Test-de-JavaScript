console.log("----Primer punto----");
let myArray = ["Mouse", "Teclado", "Parlantes", "CPU"];

function firstElement(periferico){
    console.log("Mi primer elemento del array es: " + periferico[0]);
}
firstElement(myArray);

//--------------x-------------------//
console.log("----Segundo punto----");
let elements = ["Tenedor", "Cuchillo", "Cuchara", "Vaso", "Plato"];

function readArray(array){
    console.log(array);
}
for(a = 0; a < elements.length; a ++){
    readArray(elements[a]);
}



//---------------x-----------------//

let myCar = [{
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2016
},
{
    marca: "Peugeot",
    modelo: "206",
    annio: "2020"
}];

function print(objeto){
    for(let i in objeto){
        console.log(myCar[i]);
    }
}
print(myCar);
