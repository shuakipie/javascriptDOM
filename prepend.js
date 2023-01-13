parentNode.prepend(newNode);
const fragment = new DocumentFragment();
const newP1 = document.createElement("p");
const newP2 = document.createElement("p");
fragment.prepend(newP1, newP2);
parentNode.prepend(fragment);
