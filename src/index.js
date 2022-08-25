let state = 0;//counter value

const counter=document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub') 

const render = () => {
    counter.textContent=state;
}
render();

addBtn.addEventListener('click', ()=>{
    state++;
    render()
})

subBtn.addEventListener('click', ()=>{
    state--;
    render();
})
