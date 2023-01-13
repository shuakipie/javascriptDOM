parentNode.removeChild(childNode);
// select the parent node
const parentNode = document.getElementById("parent");

// select the child node to be removed
const childNode = document.getElementById("child");

// remove the child node from the parent node
parentNode.removeChild(childNode);


// another example

// select the parent node <ul>
const parentNode = document.getElementById("parentUl");

// select the child node <li> to be removed
const childNode = document.getElementById("childLi");

// remove the child node <li> from the parent node <ul>
parentNode.removeChild(childNode);


childNode.remove();
