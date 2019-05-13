// Leon Scott: 5/13/19... just a simple Kelvin to C to F calculation. Brushing up on JS syntax

// making constant kelvin variable
const kelvin = 0

// converting kelvin to celcius and storing in new variable
var celcius = kelvin-273

// converting celcius to fahrenheit and storing in new var
var fahrenheit = celcius*(9/5) + 32

// rounding decimal
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
