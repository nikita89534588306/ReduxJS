import createStore from "./createStore"
import rootReducer from "./redux/rootReducer"


const counter=document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub') 

let store = createStore(rootReducer, 77);

addBtn.addEventListener('click', ()=>{
    store.dispatch({type:"INC"});
})

subBtn.addEventListener('click', ()=>{
    store.dispatch({type:"DEC"});
})

store.subscribe(()=>console.log(store.getState()))