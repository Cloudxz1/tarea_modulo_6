import mascotasJson from './data/data.js'

console.log(`El tamaño del data inicial es: ${mascotasJson.length}`);


const nuevaMascota_1 = { nombre: "Jenny", mascota: true, animal: "gata", edadHumana: 5 };
const nuevaMascota_2 = { nombre: "Bombón", mascota: true, animal: "perro", edadHumana: 2 };

mascotasJson.push(nuevaMascota_1, nuevaMascota_2);

console.log(`Cantidad de objetos final: ${mascotasJson.length}`);
console.log("Array resultante: ", mascotasJson);