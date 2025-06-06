# JS-Learning

A workspace for learning and experimenting with JavaScript basics.

## Project Structure

- `.devcontainer/`  
  Dev container configuration for a consistent development environment.
  - `01_basics/`  
    Contains basic JavaScript examples and exercises.
    - `test.js`  
      Example JavaScript file.
- `.github/`  
  GitHub configuration files (e.g., Dependabot).
- `README.md`  
  Project documentation.

## JavaScript Variables

  ### const :
  - Used to declare variables whose values cannot be reassigned.
  - Example:
    ```js
    const PI = 3.14;
    ```


  ### var :
  - Used to declare variables, similar to `let`, but with some differences in scope and hoisting. it can access or modifiable from any shope(its a problem).
  - Example:
    ```js
    code:
      var name = "Alice";
      console.log(PI);

    output:
      3.14

    ```

  ### let :
  - Used to declare variables that can be reassigned.(solve the problem of var)
  - Example:
    ```js
    code:
      let count = 0;
      count = 1;
      console.log(count);

    output:
      1
    ```

  ### No let,const and var :
  - we can declear a variable without const,var and let.(Not recomended)
  - Example:
    ```js
      code:
        greeting = "Hello";
        console.log(greeting);
      output:
    ```

## Note:
  If didn't assign any value, the variable's value will be undefined
  ```js
    Code:
      let a;
    console.log("The value of a is: " + a);

    output:
      The value of a is: undefined
  ```
## Note:
  ``"use strict"`` treat all JS code as newer version by machine.