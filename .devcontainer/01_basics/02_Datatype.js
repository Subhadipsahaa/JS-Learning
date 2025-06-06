"use strict";
let name = "Subhadip";   // String
let age = 23;            // Number
let isStudent = true;    // Boolean
let city;                // Undefined
let data = null;         // Null
let big = 1234567890123456789012345678901234567890n; // BigInt
let unique = Symbol("id"); // Symbol

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof city);       // undefined
console.log(typeof data);       // object (special case)
console.log(typeof big);        // bigint
console.log(typeof unique);     // symbol