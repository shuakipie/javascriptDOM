// this is the code for querySelector
document.querySelector('h1')
// if targeting on class using querySelector in ID and class this is the example
document.querySelector('#bear-image')
document.querySelector('.class-image')
// need to add the # for ID
const main1 = document.querySelector('#main')
// targetting on getElementByID no need to add the #
const main2 = document.getElementById('main')

// need to querySelector with the same class name on the section area
document.querySelector('body section ul li.special') 
// to querySelector for the input wiht the type = password
document.querySelector('input[type="password"]')
// to query all input on object property
document.querySelectorAll('input')

// this return Nodelist for querySelector
// on the getElementByID and geElementsByTagName , getElementsByClassName return HTMLCollection
