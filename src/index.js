let state = 0;//counter value

const counter=document.getElementById('counter')
const render = () => {
    counter.textContent=state;
}

render();