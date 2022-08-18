var a = false; 
const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper');  
const scissors = document.querySelector('#scissors'); 
var pchoice ; 
const losetxt = document.createTextNode('You Lost !') ; 
const wintxt = document.createTextNode('You Won !') ; 
const drawtxt = document.createTextNode('Draw !!') ; 

const win = document.createElement('h1');
const lose = document.createElement('h1');
const draw = document.createElement('h1');
const result = document.createElement('h1')


const container = document.querySelector('.container'); 
container.setAttribute('style' , 'display:flex ;justify-content:center')
win.appendChild(wintxt);
lose.appendChild(losetxt)
draw.appendChild(drawtxt)
rock.onclick = () => { 
    a = true;
    pchoice = 'rock'
    playgame('rock') 
} 

paper.onclick = () => { 
    a = true;
    pchoice = 'paper' 
    playgame('paper') 
}

scissors.onclick = () => { 
    a = true;
    pchoice = 'scissors' 
    playgame('scissors')
} 

const btn = document.querySelector('#replay') 
btn.appendChild(document.createTextNode('Replay !!'))
btn.setAttribute('style', 'height:60px ; width:240  px')
btn.onclick = () => {
    a = false; 
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    } 
} 


function playgame (pchoice) {
    let cchoice = getcomputerchoice(); 
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    } 
    result.append(document.createTextNode('Computer Chose ' + cchoice))
    container.append(result)
    if ((pchoice === 'rock' && cchoice === 'scissors') ||
     (pchoice === 'paper' && cchoice === 'rock') || 
     (pchoice === 'scissors' && cchoice === 'paper') ) {
        
            container.appendChild(win)

    } else if ((pchoice === 'scissors' && cchoice === 'rock') ||
    (pchoice === 'rock' && cchoice === 'paper') || 
    (pchoice === 'paper' && cchoice === 'scissors')) {
            
            container.appendChild(lose)

    } else if (pchoice === cchoice) {
            container.appendChild(draw)
    } 

    container.append(btn)
}

function getcomputerchoice () {
    let c = Math.floor(Math.random() * 3); 
    switch (c) {
        case 0:
            return 'rock'; 
            break;
        case 1: 
            return 'paper'
            break;
        default: return 'scissors'
            break;
    }
}