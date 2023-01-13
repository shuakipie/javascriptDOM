// Create a new element
const newDiv = document.createElement("div");

// Add content to the new element
newDiv.innerHTML = "Hello, World!";

// Get the element where you want to append the new element
const parentDiv = document.getElementById("myDiv");

// Append the new element to the parent element
parentDiv.appendChild(newDiv);



let parent = document.querySelector("#parentId");
let child = document.createElement("div");
child.innerHTML = "This is child element";
parent.appendChild(child);
