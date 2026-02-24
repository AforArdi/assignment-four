**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

with getElementById we can catch / get an element by element's id

with getElementsByClassName we can catch / get an element by element's class name

with querySelector we can get only the first match

with querySelectorAll we can get all the match

but for both querySelector & querySelectorAll we need to use css selector


**2. How do you create and insert a new element into the DOM?**

we can create an element in DOM with .createElement but before that we need to catch and store the parent element in which we are going to add the created element with .append or appendChild


**3. What is Event Bubbling? And how does it work?**

event bubbling concept is that event goes from child to parent to top depending on how we write the code


**4. What is Event Delegation in JavaScript? Why is it useful?**

Instead of using eventListener in all neceassry element in our code we can use event deligaion. First we need to add event to the parent element then we can use event.target functionalities to get the target element and work on it as we want

it makes the code less messy and more organized


**5. What is the difference between preventDefault() and stopPropagation() methods?**

in bubbling sometimes when we don't want the even to go up that's when we use stopPropagation()

and preventDefault prevent browser's default behavior