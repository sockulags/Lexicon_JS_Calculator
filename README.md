# Exercise - Calculator

> Program a real, but simple calculator in JavaScript.

Here is a visual of my current result. Or try it out, link at the bottom of this file.

![Calculator](/img/calculator.png)

 ## The functions currently included are
 - Addition\
 - Subtraction\
 - Multiplication\
 - Division\
 - Square root\
 - X powered to Y\
 - Factorials\
 - Modulus\
 - A button for getting the value of π\
 - CE for clear everything. In this case means restart the calculation\
 - An arrow for undo latest input.\
 - +/- to change between negative and positive number\
 - Equals sign to sum it up.


## How to use
1. Enter a number
2. Choose operation - if you choose **!n** or **√x**, go to step 4.
3. Enter second number
4. Press equals sign  

After you have pressed equals, your calculation history will be updated. Here is a picture for each operation currently avaiable. 

![History](/img/history-demo.png)

This list shows up directly underneath the calculator.

## How to perform longer calculations
As of right now, it can't remember more than two numbers per calculation. Therefore you have to break up it if you have more then two numbers in your input. 
Here is the process if you have more than two numbers.\
1. Enter first number
2. Choose operation
3. Enter second number
4. Press equals sign
5. Start over att 2. and continue, using the result.


#### Example
> *Calculate the area of a triangle with base 5 and heigth 6*
1. 5
2. multiplication
3. 6
4. equals
5. division
6. 2.
7. equals

*<sub>Area of a triangle: base x height / 2</sub>

___

![Picture](/img/last_result.png)
Picture is showing continues calculations made from the intial 5 x 5 = 25.

## TODO
- Integrate history to the calculator. A button to choose whether you want to see the history or not. And add a clear history button.
- Greater visualization of what is going on the calculator.
- Be able to perform longer calculation. Include option to use parentheses.

### [Try it out 🤓](https://sockulags.github.io/Lexicon_JS_Calculator/)