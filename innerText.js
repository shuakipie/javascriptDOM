// innnerText display on the value of the element
const h1 = document.querySelector('h1')
h1.innerText // display the value of h1 and not display the script tags or the class
h1.textContent = 'I am not hungry' // this one display all the p tags and all inside the p