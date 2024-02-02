/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnConvert = document.getElementById("btn")
let inputAmount = document.getElementById("input-numer")


let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")


btnConvert.addEventListener("click", function() {
      // Check for negative input
      if (inputAmount.value < 1) {
        alert("Input value must not be negative.");
        return;
    }
    /* 1 meter = 3.281 feet */
    let feet = inputAmount.value * 3.281
    let meter = inputAmount.value / 3.281
    
    /* 1 liter = 0.264 gallon */
    let gallon = inputAmount.value * 0.264
    let liter = inputAmount.value / 0.264
    
    /* 1 kilogram = 2.204 pound */
    let pound = inputAmount.value * 2.204
    let kilogram = inputAmount.value / 2.204
    
    length.innerHTML = `${inputAmount.value} meters = ${feet.toFixed(3)} feet | ${inputAmount.value} feet = ${meter.toFixed(3)} meters`
    
    volume.innerHTML = `${inputAmount.value} liters = ${gallon.toFixed(3)} gallons | ${inputAmount.value} gallons = ${meter.toFixed(3)} liters`
    
    mass.innerHTML = `${inputAmount.value} kilos = ${pound.toFixed(3)} pounds | ${inputAmount.value}  pounds = ${kilogram.toFixed(3)} kilos`
})