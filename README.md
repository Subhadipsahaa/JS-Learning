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

### let :
- Used to declare variables that can be reassigned.
- Example:
  ```js
  let count = 0;
  count = 1;
  ```

### var :
- Used to declare variables, similar to `let`, but with some differences in scope and hoisting.
- Example:
  ```js
  var name = "Alice";
  ```