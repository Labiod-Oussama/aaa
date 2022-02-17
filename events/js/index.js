const myTitle = document.querySelector('.h-1');
const titleEvent = ['OUR EVENTS'];

let index = 0;
setInterval(() =>{
    for(let i=0;i<titleEvent.length;i++){
        myTitle.textContent = titleEvent[i].slice(0,index++);
    }
},200);