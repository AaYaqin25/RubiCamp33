import { PI, Calculator } from "../OOP_17_import_export//calculator.js";

let calc = new Calculator();

calc.add(10).substract(5).result();
calc.add(3).multiply(4).divide(6).result();
calc.number = 7;
console.log(`nilai sekarang : ${calc.number}`);
calc.multiply(2).multiply(PI).result();
calc.number = 7;
calc.squre().multiply(PI).result();
calc.number = 4;
calc.exponent(3).result();
calc.squreRoot().result();