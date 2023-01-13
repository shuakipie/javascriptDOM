// creatElement
document.createElement('h2')
const newh2 = document.createElement('h2')
newh2.innerText = 'I like animals' // and new text content for h1
newh2.classList.add('special') // add a speical class

// append value
document.querySelector('section')
const sectiopn = document.querySelector('section')
section.appendChild(newh2) // add the new creatElement on the new querySelector it will go to the next section child
// creating a new img and pass it to the DOM
document.createElement(img)
const newImg = createElement('img')
newImg.src = 'id.jpg'
document.body.appendChild(newImg) // it will add to the last of the body content
newImg.style.width = '300px' // change the width of the img

const newLink = document.createElement('a')
newLink.innerText = 'Mr Bubz Video! CLICK HERE'
newLink.href = 'http://www.google.com'

const firstP = document.querySelector('p')
firstP.appendChild(newLink) // appendChild(newchild)is add to that end of the p