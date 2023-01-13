// parentElement 
document.querySelector('li')
const firstLi = document.querySelector('li')
firstLi.parentElement // return one above li = ul
firstLi.parentElement.parentElement // 2nd run return above ul = body
firstLi.parentElement.parentElement.parentElement // 3rd run return above body = html


// access children
document.querySelector('ul')
const ul = document.querySelector('ul')
ul.children // retrun one bottom of the element like ul have li so that his children
ul.children[0].value // target index 0 or first li value
ul.children[1].innerText // return index 1 second li

firstLi.nextElementSibling // share a parent and go down to next li
firstLi.previousElementSibling // share a parent and go up to the li
