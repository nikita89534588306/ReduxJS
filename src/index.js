import {createStore} from "redux"
import rootReducer from "./redux/rootReducer"


const counter=document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub') 

let store = createStore(rootReducer, 11);
store.subscribe(()=>{ counter.textContent = store.getState() })
store.dispatch({type:"INIT_APP"})

addBtn.addEventListener('click', ()=>{
    store.dispatch({type:"INC"});
})

subBtn.addEventListener('click', ()=>{
    store.dispatch({type:"DEC"});
})

