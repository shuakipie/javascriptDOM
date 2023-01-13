// // // const allLis = document.querySelectorAll('li');

// // // // for(let i = 0; i < allLis.length; i++){
// // // //     console.log(allLis[i].innerText)
// // // //     allLis[i].innerText = 'We are the Champions'
// // // // } // other use i forloop


// // // for (let li of allLis){
// // //     li.innerHTML = 'WE ARE <b>NOW THE CHAMPIONS</b>'
// // // }


// // // const allNewLi = document.querySelectorAll('li')
// // // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// // // // forEach
// // // allNewLi.forEach((li, i) => {
// // //     const color = colors[i]
// // //     li.style.color = color // this way return first color li red then loop until all color from last purple return

// // // })

// // const todo = document.querySelector('#todos .todo')
// // // todo.style.color = 'gray'
// // // todo.style.textDecoration = 'line-through'
// // // todo.style.opactiy = '50%'
// // // need to apply it to the new class
// // // todo.getAttribute('class')
// // // todo.setAttribute('class', 'todo done')
// // todo.classList.remove('done') // check the classlist to change like remove the class done
// // todo.classList.toggle('done') // add it and remove it right away
 

// // creatElement
// // document.createElement('h2')
// const newh2 = document.createElement('h2')
// newh2.innerText = 'I like animals' // and new text content for h1
// newh2.classList.add('special') // add a speical class

// // append value
// // document.querySelector('section')
// const section = document.querySelector('section')
// section.appendChild(newh2) // add the new creatElement on the new querySelector it will go to the next section child
// // creating a new img and pass it to the DOM
// // document.createElement(img)
// const newImg = document.createElement('img')
// newImg.src = 'id.jpg'
// document.body.appendChild(newImg) // it will add to the last of the body content
// newImg.style.width = '300px' // change the width of the img

// const newLink = document.createElement('a')
// newLink.innerText = 'Mr Bubz Video! CLICK HERE' 
// newLink.href = 'http://www.google.com'

// const firstP = document.querySelector('p')
// firstP.appendChild(newLink) // appendChild(newchild)is add to that end of the p
