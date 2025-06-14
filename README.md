# JS-Learning

A workspace for learning and experimenting with JavaScript basics.

## Project Structure

- `.devcontainer/`  
  Dev container configuration for a consistent development environment.
  - `01_basics/`  
    Contains basic JavaScript examples and exercises.
- `.github/`  
  GitHub configuration files (e.g., Dependabot).
- `README.md`  
  Project documentation.

## JavaScript Variables

  ### const :
  - Used to declare variables whose values cannot be reassigned.
  - Example:
    ```js
    Code:
      const PI = 3.14;
    Output:
      3.14
    ```


  ### var :
  - Used to declare variables, similar to `let`, but with some differences in scope and hoisting. it can access or modifiable from any shope(its a problem).
  - Example:
    ```js
    Code:
      var name = "Alice";
      console.log(PI);

    Output:
      3.14

    ```

  ### let :
  - Used to declare variables that can be reassigned.(solve the problem of var)
  - Example:
    ```js
    Code:
      let count = 0;
      count = 1;
      console.log(count);

    Output:
      1
    ```

  ### No let,const and var :
  - we can declear a variable without const,var and let.(Not recomended)
  - Example:
    ```js
      Code:
        greeting = "Hello";
        console.log(greeting);
      Output:
    ```

## Note :
  ```js
  //If didn't assign any value, the variable's value will be undefined
    Code:
      let a;
    console.log("The value of a is: " + a);

    Output:
      The value of a is: undefined
  ```
  
  
## Note :
  ```js
  "use strict"; //Treat all JS Code as newer version by machine.
  ```

## JavaScript Data Types 

JavaScript supports different types of data, divided into two main categories:

### 1. **Primitive Data Types**

These are the most basic types in JavaScript.

| Type       | Description                      | Example                  |
|------------|----------------------------------|--------------------------|
| `String`   | Textual data                     | `"Hello"`                |
| `Number`   | Numeric values (integers, floats)| `42`, `3.14`             |
| `Boolean`  | Logical true or false            | `true`, `false`          |
| `Undefined`| Variable declared but not assigned | `undefined`           |
| `Null`     | Explicitly empty or null value   | `null`                   |
| `BigInt`   | Large integers beyond safe limit | `1234567890123456789n`  |
| `Symbol`   | Unique identifiers               | `Symbol("id")`           |

#### Examples:

```js
Code:
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
Output:
  string
  number
  boolean
  undefined
  object
  bigint
  symbol
```
## Note:
  ```js
  console.log(typeof(variable)) // 'typeof' use for know the the type.
  //null's type is object.
  ```