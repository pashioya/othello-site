import { usersJson } from './users.js';

const users=JSON.parse(usersJson);
let errorMessage=document.getElementById("errorMessage");
const button=document.getElementById("submit")
button.addEventListener("click", ev => {getInfo()})

function getInfo() {
    console.log("test")
    let isLogin=false;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    for (let i=0; i<users.length; i++){
        if(username===users[i].username && password===users[i].password){
            isLogin=true;
            console.log(isLogin);
            window.location.href = "../index.html";
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("isLogin", isLogin);
            window.localStorage.setItem("role", users[i].role);
            return;
        }
    }
    console.log("Please try again");
    let inputs= document.querySelectorAll("input");
    errorMessage.textContent="Error! Please try again"
    inputs[0].value=null;
    inputs[1].value=null;
}

