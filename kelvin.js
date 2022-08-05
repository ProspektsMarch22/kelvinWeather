//Kelvin Weather JavaScrip study

//Current temperature in Kelvin. Must remain as a constant
const kelvin = 298;

//The temperature in Celsius is always 273 degrees minus from Kelvin.
const celsius = kelvin - 273;

//The temperature in fahrenheit takes a formula to be calculated - the celsius number multiplied by 9/5 plus 32. It often returns a decimal number, so next thing we do is round it using the Math.floor() method
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);

//For extra practise, here comes the Newton scale. It also takes a formula to be calculated, and for reading sake i decided to go straight with a decimal value. So that we have to round up too.
let newton = celsius * 0.33;
newton = Math.floor(newton);

//And with these console.logs we have effectively a kelvin translator to both fahrenheit and newton scales:
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
