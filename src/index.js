// Escribe un ejemplo de código como los revisados anteriormente, utilizando funciones de callback, y 
// determina el orden de ejecución (debes tener en cuenta que el código que recibe la función de callback 
// puede tomar un tiempo determinado). 
// • Define dos variables. 
// • Muestra esas variables por consola usando “console.log()”. 

let variable_1 = 'Hola, mi nombre es Vanesa';
let variable_2 = 'Esto es un callback';

console.log(variable_1);
console.log(variable_2);

// • Define un método de ejemplo que realice una petición a una base de datos, e implementa el uso 
// de una función de callback que muestre por consola la respuesta. 
// • Puedes elegir cualquier orden para tus “console.log()”, luego de eso, especifica el orden en que se 
// mostrarán por pantalla.

function solicitarBD(res){
    setTimeout(() => {
        const respuesta = 'Llamado a la base de datos';
        res(respuesta);
    }, 3000);
}

solicitarBD((respuesta) => {
    console.log(respuesta);
});

// Puede utilizar el comando npm run dev para el primer ejercicio, y el segundo utilice npm run dev_2