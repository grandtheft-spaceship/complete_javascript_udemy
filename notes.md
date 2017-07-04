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

### Implementing Our 'Hold' Function and the D.R.Y. Principle
### Creating a Game Initialization Function
### Finishing Touches: State Variables

* **State Variable** - tells us the condition of a system
  * Used to remember the state of something

## Advanced JavaScript: Objects and Functions (*See "5-Advanced-JS" for code examples*)
### Everything Is an Object: Inheritance and the Prototype Chain

* Primitives vs Objects
* JavaScript is a prototyped-based language
  * **Inheritance** works by using prototypes
  * Every JS object has a **prototype property**
  * Any property or method you want to be inheritable needs to be added to the original constructor's prototype property.
* Every JS object created is an instance of the **Object constructor**
* The constructor's prototype property is NOT the prototype of that constructor itself; it's the prototype of ALL instances that are created through it
* **Prototype Chain** - When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found.

### Creating Objects: Function Constructors

* **new** - When used, an empty object is created and the constructor function, with arguments, is called
* **this** - When creating a **constructor**, the 'this' keyword will refer to the constructor object instead of the global object. The 'new' operator points 'this' to the empty object that was created.
* By defining properties/methods within an Object's prototype vs object literal, only one copy of the property/function needs to be created/saved instead of having them within each instance

###Creating Objects: Object.create

* **Object.create(object, data)** - Another way to create objects with prototypal inheritance
  * The object passed as the first argument will contain the prototype properties/methods
  * The data passed as the second argument will contain instance-specific data (object literals)
* **Object.create vs constructor functions**
  * Object.create -> builds object that inherits directly from the one passed as the first argument
  * Constructor -> the instance created inherits from the constructor's prototype property

### Primitives vs Objects

* Variables containing primitives actually **hold the data within itself**
* Variables do not actually contain objects, they **contain the reference to the place in memory where the object is stored**
* The same rules apply to functions

### First-Class Functions: Passing Functions as Arguments

* A function is an instance of the Object type
* A function behaves like any other object
* We can store functions in a variable
* We can pass a function as an argument to another function
* We can return a function from a function
* All these behaviors is what makes all functions in JavaScript **first-class functions**

### First Class Functions: Functions Returning Functions
### Immediately Invoked Function Expressions (IIFE)

* Syntax -> ( function() { *logic goes here* } )();
* If you exclude the parenthesis wrapping the anonymous function, the JavaScript parser would think you are trying to write a function declaration, and since a name is not given to the "declaration", the parser will throw an error
* By wrapping the anonymous function in parens, we trick the parser into thinking we are writing a function expression

### Closures

* **Closures** - An inner functions always has access to the variables and parameters of its outer function, even after the outer function has returned.
  * Even after a function returns and its execution context has popped off the execution stack, its variable object still sits in memory and is accessible
    * The **scope chain** is a pointer to variable objects; it always stays in tact
* Closures are automatically built into JavaScript, we don't build them

### Bind, Call and Apply

* **call()** - The first argument sets 'this' variable. Used to access other object's functions
  * Use **call()** on other object's methods
  * This is called **Method Borrowing**
* **apply()** - Similar to call() method; the first argument will set the 'this' variable, the second arugment will be an array that stores the other arguments needed
* **bind()** - Similar to call(), but this method does not immediately call the function. It instead creates a copy of the function in order to store it somewhere else
  * Returns a copy of function with pre-set arguments
    * If you do not need to really set 'this' variable, you can pass 'this' as first argument

## Putting It All Together: The Budget App Project
### Project Planning and Architecture: Part 1

* To-Do List:
  1. Add event handler to input field button
  2. Get input values from input field
  3. Add the new item to our data structure
  4. Add the new item to the UI
  5. Calculate budget
  6. Update the UI
* Modules
  * Important aspect of any robust application's architecture
  * Keeps the units of code for a project both cleanly separated and organized
  * Encapsulate some data into privacy and expose other data publicly

* Structuring Code wiih Modules
  * UI Module - *Front end*
    * Get input values from input field
    * Add the new item to the UI
    * Update the UI
  * Data Module - *back end*
    * Add the new item to our data structure
    * Calculate budget
  * Controller Module - *link between both front end and back end modules*
    * Add event handler to input field button

### Implementing the Module Pattern

* We use modules to keep pieces of code inside separate, independent, and organized units
  * They contain functions and variables that are private; making them accessible only by the module
  * They can also contain public functions
    * This is called **data encapsulation**
      * Allows you to hide the implementation details of a specific module from the outside scope so that we only expose a public interface; sometimes called an **API**
* **Module Pattern** - all you need to know are the concepts of **closures** and **IIFEs**
  * An **IIFE** allows us to have **data privacy** because it creates a new scope that is not accessible by the outside scope
  * The module pattern will **return an object that contains all the functions that we want to be public**
  * **Closures** allow our inner function (which will return an object with our public function) to have access to its outer function's variables and functions
  * **Separation of Concerns** - each part of an application should only be interested in doing one thing, independently
    * Our budgetController and UI controller are completely separate and won't even know the other exists
    * The third module, app **controller**, will be the link between the two modules; reading data from one and writing data to the other
  * Modules can also take arguments because they are just **function expressions**

### Setting Up the First Event Listener

* For event listeners, the callback function can receive an argument called the **event object**
* **keycode property** - identifies the key we pressed for keypress events
  * **which** - used for older browsers that may not have the keycode property

### Reading Input Data
### Creating an Initialization Function

* **Public Initialization Function**

### Creating Income and Expense Function Constructors

* Its better to store everything into one data structure than to have random variables just floating around

### Adding a New Item to Our Budget Controller
### Adding a New Item to the UI

* When creating a long HTML string in JavaScript, we can start/end the string with **single quotes** and use **double quotes** throughout the string body. This will let JavaScript know that when we use the double quotes, that does NOT mean the end of the string
* **.replace( thingToBeReplaced, thingReplacingOriginalElement)** - Searches for a string and then it replaces that string with the data that we put into the method
* **insertAdjacentHTML( position, newElement )** - A function used to append new HTML elements to the DOM. There are 4 different **positions** you can choose to append your new element

### Clearing Our Input Fields

* **querySelectorAll()** - returns a **list** of all the elements that match the type of element(s) you specified
  * if you want to select more than one HTML element, you can add a comma between each HTML element; similar to how you would in a CSS file
  * To convert a list to an array, we can use the **slice()** function - slice() returns a copy of the array that it was called on
    * The problem here is, slice() is an **Array method**, so we cannot call it directly on our return object because that is a list
    * To do this, we can use the **Array** object, because **slice()** will be there in its prototype, then use the **call()** method and pass in our return object as the **this** variable in the arguments
      **fieldsArray = Array.prototype.slice.call( fields );**
* **forEach()** - another way to loop over arrays
  * Call the method on the array and it will take a callback as its argument
    * The callback can receive up to 3 arguments: the current value, the index number, and the entire array
* **focus()** - method to reset the focus to whatever input field you choose

### Updating the Budget: Controller

* Each function should have its own simple task
* **parseFloat()** - function to convert string to floating number

### Updating the Budget: Budget Controller

* **-1** is a value commonly used to say that a value is non-existent
* It's good practice to write functions that simply **get** data or **set** data

### Updating the Budget: UI Controller
### Project Planning and Architecture: Step 2
### Event Delegation

* **Event Bubbling** - when an event is triggered on some DOM element, the exact same event is also triggered on all of the parent elements all the up until it reaches the HTML element, which is the root
* The element that caused the event to happen is called the **target element**
  * The target element is stored as a property in the **event object**
* **Event Delegation** - Since all parent elements will know the target element, we can attach an event handler to a parent element, wait for the event to bubble up, and then do what was intended with the target element
  * **Cases for Event Delegation**
    1. When we have an element with a lot of child elements that we are interested in
    2. When we want an event handler attached to an element that is not yet in the DOM when our page is first loaded

### Setting up the Delete Event Listener Using Event Delegation

* **DOM Traversing** - moving around the DOM from a target element
* **parentNode** - returns parent element of the HTML element it was called on
* When you call a string method, like **split()**, on a string, JavaScript automatically puts a wrapper around the string and **converts it from a primitive to an object**
  * This object then gains access to string methods
  * The same thing also occurs with **numbers**
* **split()** - a string method used to break apart string
  - You can pass an argument, the **split-string**, that will represent the break point of your choosing
  - Returns an array of strings that come **before and after the split-string**

### Deleting an Item from Our Budget Controller
* **map()** - function used to iterate over an array  
  - Receives a callback function, which has acccess to the current element, the current index, and the entire array
  - The difference between map and forEach is map **returns a new array**
  - The callback function will always return something
* **splice()** - array function used to remove elements from an array
  * The first argument is the position number, or index, at which we want to start deleting
  * The second argument is the number of elements we want to delete
* **parseInt()** - function to convert string to an integer

### Deleting an Item from the UI
[DOM Manipulation](https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/)

* In JavaScript, we cannot simply delete an element, we can only delete a child of an element

### Project Planning and Architecture: Step 3
