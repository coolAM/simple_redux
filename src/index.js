import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

//принимает в себя action и меняет store
function list(state = [], action) {
    if (action.type === "add_item"){
        return [...state, action.payload]
    }
    console.log(action);
    return state;
}
const store = createStore(list);
const  button = document.querySelectorAll(".add")[0];
const  input = document.querySelectorAll(".input")[0];
const i = input.value;

console.log(i);

//подписка на изменения в store
store.subscribe(() => {
    const list = document.querySelectorAll('.list')[0];
    list.innerHTML = '';
    store.getState().forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    })
    console.log('!',store.getState());
})
button.addEventListener('click', function (){
    console.log(i);
    store.dispatch({type: "add_item", payload: input.value})
});
// измения store вспомощью dispatch
store.dispatch({type: "add_item", payload: "something"});
store.dispatch({type: "add_item", payload: "something1"});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




