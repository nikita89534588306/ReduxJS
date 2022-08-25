import createStore from "./createStore"
import rootReducer from "./redux/rootReducer"


const counter=document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub') 

let store = createStore(rootReducer, 0);
window.store = store;

addBtn.addEventListener('click', ()=>{

})

subBtn.addEventListener('click', ()=>{

})
