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

edad = 50

// Agrego un nuevo elemento al array usando método push:

conocimientos.push('Cocina')

console.log(conocimientos.length)
console.log(conocimientos)
console.log('Elemento que agregue al array: ' + conocimientos[5])
console.log('Variable "edad" actualizada: ' + edad)

