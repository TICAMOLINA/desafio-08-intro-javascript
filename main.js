import './style.css'

console.error('Desafio 08 – JavaScript Intro - JS')

console.warn('1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.- Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.- Después cambia el valor de edad y añade un nuevo element al array.- Muestra esos nuevos valores por la consola.')


let nombre = 'Mauricio'
let apellido = 'Molina'
let edad = 35
let pais = 'Argentina'
let conocimientos = ['Guitarra', 'Historia', 'Música', 'Fútbol', 'Series']

console.log(nombre)
console.log(apellido)
console.log(edad)

// La siguiente que es pais la muestro como si fuera un objeto para saber a que se refiere y como una alternativa para consolearla:
console.log({pais})

console.log(conocimientos)
console.log(conocimientos[0])
console.log(conocimientos[1])
console.log(conocimientos[2])
console.log(conocimientos[3])
console.log(conocimientos[4])

// Definiendo nuevo valor para la variable "edad".
edad = 50

// Agrego un nuevo elemento al array usando método push:

conocimientos.push('Cocina')

console.log(conocimientos.length)
console.log(conocimientos)
console.log('Elemento que agregue al array: ' + conocimientos[5])
console.log('Variable "edad" actualizada: ' + edad)



console.warn('2. Debes crear las variables marca, velocidad, stock y modelos (array) - Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings] - Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente).')


// En este caso y para hacerlo de otra manera defino un objeto, idealizando que la consigna hace alusión a un auto.-
let automovil = {
    marca: 'Volkswagen',
    velocidad: 180,
    stock: 10,
    modelos: ['Gol', 'Vento', 'Passat', 'Golf', 'Tiguan', 'Tcross'],
}

console.log(`Bienvenido a nuestra concesionaria ${automovil.marca}, podemos ofrecerle los siguientes modelos de acuerdo a sus necesidades: ${automovil.modelos}. Notamos que está interesado particularmente en el modelo ${automovil.modelos[5]}. Le comento que es un vehículo con magníficas prestaciones, consumo eficiente y alcanza una velocidad máxima en ruta de ${automovil.velocidad} km/hora. Actualmente contamos con una disponibilidad de ${automovil.stock} unidades de diferentes colores, entre las cuales puede optar por el que más le guste.`)

let modelosAutos = automovil.modelos
console.log(modelosAutos)

// Para mostrarlos automáticamente uso el método forEach:
modelosAutos.forEach(function(model, i) {
    console.log(i + ' ' + model)
})



console.warn('3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h - Comprueba que si la velocidad es mayor al limite.- Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.- Si es menor el mensaje deberá ser que todo va bien.')

let velocidad = prompt('A qué velocidad vas?', 135);
console.log(velocidad)
if (velocidad > 60) console.log('Excede el límite, baje la velocidad!!!')    
else console.log('Va a una velocidad permitida 👍🏽')




console.warn('4. Dado un sueldo, crear una condicional comparando su sueldo.- Si el sueldo es $100.000 es excelente- Si el sueldo es menor o igual a $80.000 es muy bueno.- Si el sueldo es menor o igual a $60.000 es bueno.- Y si el sueldo es menor o igual a $40.000 es bajo.')

let sueldo = prompt('Ingrese su sueldo mensual expresado en numeros sin signos')
if (sueldo <= 40000) {
    console.log('Su sueldo es bajo');
} else if (sueldo <= 60000){
    console.log('Su sueldo es bueno');
} else if (sueldo <= 80000){
    console.log('Su sueldo es muy bueno');
} else {
    console.log('Su sueldo es excelente');
}