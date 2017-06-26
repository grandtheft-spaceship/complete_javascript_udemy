# Complete JavaScript

## How JavaScript Works Behind the Scenes (*See "3-How-JS-Works" for code examples*)
### How Our Code Is Executed: JavaScript Parsers and Engines

* Your Code -> Browser (*Host*) -> JavaScript Engine (*Google's V8 Engine*) -> Parser (*Checks validity of code*) -> Abstract Syntax Tree (*Data Structure that is translated to Machine Code*) -> Code runs

### Execution Contexts and the Execution Stack

* **Execution Context**: A box/container/wrapper which stores variables and in which a piece of our code is evaluated and executed
  * DEFAULT: **Global Execution Context**
    * Code NOT within a function
    * Associated with **Global Object**
    * For the browser, it refers to the **Window Object**
* Each time a function is invoked, it gets its own execution context

### Execution Contexts in Detail: Creation and Execution Phases and Hoisting

* You can associate an execution context with an **object**
* Execution Context has 3 properties:
  * **Variable Object** - Contains function arguments, variable declarations, variable objects for all its parents and function declarations
  * **Scope Chain** - Contains current, Variable Objects along with Variable Objects for all its **parents**
  * **this** variable
* When a function is invoked, a new execution context is put on the **execution stack**; in two phases
  * Phase 1: **The Creation Phase**
    * Creation of Variable Object
    * Creation of Scope Chain
    * Determine value of **this** variable
  * Phase 2: **The Execution Phase**
    * The code for the function that generated the current execution context is run, line-by-line
    * All variables get defined
* **The Variable Object** - The argument object is created, containing all the arguments that were passed into the function
  * Code is scanned for **function declarations**
    * For each function, a property is created in the Variable Object, **pointing to the function**
  * Code is scanned for **variable declarations**
    * For each variable, a property is created in the Variable Object, and **set to undefined**
  * The above two points is called **Hoisting**
    * Both functions and variables are hoisted in JavaScript
    * Before the execution phase, functions are defined where variables are set to undefined
    * Only in the execution phase, will variables become defined
    * NOTE: Hoisting only works with function declarations(*no var keyword*) and NOT function expressions(*uses var keyword*)

### Scoping and the Scope Chain

* Each new function creates a **scope**; the space/environment, in which, the variables it defines are accessible
* **Lexical Scoping** - a function that is lexically within another function gets access to the scope of the outer function, or parent function
  * Inner function also has access to variables and functions the parents function defines
  * Lexical means: where something is written in the code / refers to the position of something within our code
* The **execution stack** is the order in which **functions are called**
* The **scope chain** is the order in which **functions are written lexically**

### The 'this' keyword

* **this** - a variable that each execution context gets and is stored in the execution context object
  * For a **regular function call**, **'this'** refers to **default global object**
  * For a **method call**, **'this'** refers to the **object calling the method**
  * The **this** keyword is NOT assigned a value until a function where it is defined is invoked
* **Method Borrowing** - userDoesNotHaveFunction.functionName = userHasFunction.functionName

## JavaScript in the Browser: DOM Manipulation and Events
### First DOM Access and Manipulation

* **document** - Object which gives us access to the DOM
* **querySelector()** - Lets us select the first element it finds based on CSS selectors
* **textContent()** - Manipulate plain text within selected HTML element
* **innerHTML()** - Manipulates HTML within selected HTML element

### Events and Event Handling: Rolling the Dice

* **Events** are notifications that are sent to notify the code that something happened on the webpage
  * Triggered by clicking a button, resizing a window, scrolling down or pressing a key, etc.
* **Event Listeners** - a function that performs an action based on a certain event. It waits for a specific event to happen
  * An event can only be processed or handled once the Execution Stack is empty
  * **Message Queue** - Part of JavaScript Engine / Where all events are that happen in the browser are put, waiting to be processed
  * Since event listeners are functions, they get their own Execution Context that is put on the Execution Stack
* **addEventListener( typeOfEvent, callback )**
  * A **callback function** is a function that is called by another function
    * We pass the callback function in another function as an argument
* **Anonymous function** - A function that does not have a name; so it cannot be reused
* **documentGetElemenyById** - select element by id

### Updating Scores and Changing the Active Player
* **!=** - performs **type coercion**
* **!==** - DOES NOT perform type coercion
