import {createStore} from "redux"
import { inc, dec, init } from "./redux/action"
import rootReducer from "./redux/rootReducer"


const counter=document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub') 

let store = createStore(rootReducer, 12);
store.subscribe(()=>{ counter.textContent = store.getState() })
store.dispatch(init())

addBtn.addEventListener('click', ()=>{
    store.dispatch(inc());
})

subBtn.addEventListener('click', ()=>{
    store.dispatch(dec());
})

