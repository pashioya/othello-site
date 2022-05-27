import { usersJson } from './users.js';


const button=document.getElementById("submit")
button.addEventListener("click", ev => {getInfo()})

function getInfo() {
    console.log("test")
    let isLogin=false;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    for (let i=0; i<usersJson.length; i++){
        if(username===usersJson[i].username && password===usersJson[i].password){
            isLogin=true;
            console.log(isLogin);
            window.location.href = "../index.html";
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("isLogin", isLogin);
            window.localStorage.setItem("role", usersJson[i].role);
            return;
        }
    }
    console.log("Please try again");
    let inputs= document.querySelectorAll("input");
    inputs[0].value=null;
    inputs[1].value=null;
}

