parentNode.append(newNode);
// create a new <p> element to be appended
const newP = document.createElement("p");
newP.innerHTML = "This is a new paragraph.";

// select the parent node
const parentNode = document.getElementById("parent");

// append the new <p> element to the parent node
parentNode.append(newP);


// another example 

// create a new <li> element to be appended
const newLi = document.createElement("li");
newLi.innerHTML = "New Item";

// select the parent node <ul>
const parentNode = document.getElementById("parentUl");

// append the new <li> element to the parent node <ul>
parentNode.append(newLi);

const fragment = new DocumentFragment();
const newP1 = document.createElement("p");
const newP2 = document.createElement("p");
fragment.append(newP1, newP2); // this one add to the botoom of the p
parentNode.append(fragment); // this one add to the botoom of the p
