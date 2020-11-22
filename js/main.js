
// Declaring a variable
let addToDoButton = document.getElementById('addtodo');
let toDoConatiner = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
console.log('hello world');

//  creating a function and event
addToDoButton.addEventListener('click',function(){

    // creating a paragraph tag p in js
    var paragraph = document.createElement('p');

    // styling/connecting a paragraph
    paragraph.classList.add('paragraph-styling');
    // Displaying the value of input in created paragraph p with innerHtml
    paragraph.innerText = inputField.value;

    // Appending the value's of paragraph 
    toDoConatiner.appendChild(paragraph);
    console.log(paragraph)

    // Declaring inputfield empty on every click
    inputField.value="";

    // creating a function  a line when click in paragraph value 

    paragraph.addEventListener('click', function(){

        paragraph.style.textDecoration ="line-through";
  });
  
  // Removing the paragraph value by double clicking 
  paragraph.addEventListener('dblclick', function(){
    toDoConatiner.removeChild(paragraph);
      
});

});