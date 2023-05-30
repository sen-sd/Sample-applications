// x = 3.14;       // This will not cause an error.
/*
function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
  }
*/

// Set strict mode
// JavaScript was designed to be easy to learn and allows certain mistakes to be made by the developer. 
// For example, JavaScript does not throw an error when you use a misspelled variable, 
// and instead creates a new global one.
// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

// use document.querySelector to get the button reference.
const switcher = document.querySelector('.btn');

// add the event handler for the click event. In the following code, 
// you add a listener for the click event and define an event handler function to be executed by the browser 
// when the click event occurs.
// toggle method to modify the <body> element's class attribute. 
// This method automatically adds or removes the light-theme and dark-theme classes. 
// This code applies the dark styles instead of light styles on click, and then light styles instead of dark if you click again.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        //document.body.className = 'dark-theme';
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
        //document.body.className = 'light-theme';
    }

    console.log('current class name: ' + className);
});