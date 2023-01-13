parentNode.insertBefore(newNode, referenceNode);
// create a new <p> element to be inserted
const newP = document.createElement("p");
newP.innerHTML = "This is a new paragraph.";

// select the parent node and reference node
const parentNode = document.getElementById("parent");
const referenceNode = document.getElementById("reference");

// insert the new <p> element before the reference node
parentNode.insertBefore(newP, referenceNode);


another example

// create a new <li> element to be inserted
const newLi = document.createElement("li");
newLi.innerHTML = "New Item";

// select the parent node <ul> and reference node <li>
const parentNode = document.getElementById("parentUl");
const referenceNode = document.getElementById("referenceLi");

// insert the new <li> element before the reference node <li>
parentNode.insertBefore(newLi, referenceNode);





