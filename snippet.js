const myImg = document.createElement('img')
myImg.src= 'https://images.unsplash.com/photo-1673468199846-fb5572dfb862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'

myImg.style.width = '250px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const allEls = document.body.children;


setInterval(() => {
    for (let el of allEls){
    const rotation = Math.floor(Math.random() * 360)
    const x =  Math.floor(document.body.clientWidth * Math.random());
    const y =  Math.floor(document.body.clientHeight * Math.random());
    el.style.transform = `translate(${x}px, ${y}px) rotate{rotation}deg`;
    }
    
}, 2000)
