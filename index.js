/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnConvert = document.getElementById("btn")
let inputAmmount = document.getElementById("input-numer")

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

btnConvert.addEventListener("click", function() {
    /* 1 meter = 3.281 feet */
    let feet = inputAmmount.value * 3.281
    let meter = inputAmmount.value / 3.281
    
    /* 1 liter = 0.264 gallon */
    let gallon = inputAmmount.value * 0.264
    let liter = inputAmmount.value / 0.264
    
    /* 1 kilogram = 2.204 pound */
    let pound = inputAmmount.value * 2.204
    let kilogram = inputAmmount.value / 2.204
    
    length.innerHTML = `${inputAmmount.value} meters = ${feet.toFixed(3)} feet | ${inputAmmount.value} feet = ${meter.toFixed(3)} meters`
    
    volume.innerHTML = `${inputAmmount.value} liters = ${gallon.toFixed(3)} gallons | ${inputAmmount.value} gallons = ${meter.toFixed(3)} liters`
    
    mass.innerHTML = `${inputAmmount.value} kilos = ${pound.toFixed(3)} pounds | ${inputAmmount.value}  pounds = ${kilogram.toFixed(3)} kilos`
})