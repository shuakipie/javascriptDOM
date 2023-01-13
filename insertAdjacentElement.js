element.insertAdjacentElement(position, newNode);

const newP = document.createElement("p"); // newNode Created
newP.innerHTML = "This is a new paragraph.";

const currentNode = document.getElementById("current"); // where to add the newNode created
currentNode.insertAdjacentElement("beforebegin", newP); // add the newNode to the position need to add

//"beforebegin": Inserts the new element before the current element.

const newP = document.createElement("p");
newP.innerHTML = "This is a new paragraph.";
const currentNode = document.getElementById("current");
currentNode.insertAdjacentElement("beforebegin", newP); // it return at the top of the p tag

//"afterbegin": Inserts the new element inside the current element, at the beginning.
const newSpan = document.createElement("span");
newSpan.innerHTML = "This is a new span.";
const currentNode = document.getElementById("current");
currentNode.insertAdjacentElement("afterbegin", newSpan);  // return first of the p tag

//"beforeend": Inserts the new element inside the current element, at the end.

const newImg = document.createElement("img");
newImg.src = "https://via.placeholder.com/150";
const currentNode = document.getElementById("current");
currentNode.insertAdjacentElement("beforeend", newImg); // return last on the p tag

//"afterend": Inserts the new element after the current element.

const newDiv = document.createElement("div");
newDiv.innerHTML = "This is a new div.";
const currentNode = document.getElementById("current");
currentNode.insertAdjacentElement("afterend", newDiv); // return end of the p tag outside

