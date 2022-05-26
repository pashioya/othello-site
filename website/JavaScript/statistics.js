import { gamesJson } from '/gamesessions.js';

const games=JSON.parse(gamesJson);

let id=document.getElementById("gameID");
let username=document.getElementById("username");
let win=document.getElementById("win");
let lose=document.getElementById("lose");
let isWin;
let data=[];


let button=document.getElementById("submit");
button.addEventListener("click", submit);

if(window.localStorage.getItem("role")==="user"){
    username.value=window.localStorage.getItem("username");
    username.disabled=true;

}


function submit(event) {
    event.preventDefault();
    if(win.checked==true){
        isWin=true
    }
    else if(lose.checked==true){
        isWin=false;
    }


    //If id has value
    if (id.value) {
    for (let i = 0; i < games.length; i++) {

            if (id.value === games[i].gamesession_id) {
                data.push(games[i])

                return
            }


        }

    }

    else {
        //if id doesn't have value

        //if user has value or win/lose has value
        if (username.value && isWin==true || isWin==false){
            for (let i = 0; i < games.length; i++) {
                if (isWin === games[i].user_won && username.value === games[i].username) {
                    data.push(games[i])
                }
            }
        }else if (username.value) {
            for (let i = 0; i < games.length; i++) {
                if ( username.value === games[i].username) {
                    data.push(games[i])
                }
            }


        }
        else if (isWin==true || isWin==false) {
            for (let i = 0; i < games.length; i++) {
                if (isWin === games[i].user_won) {
                    data.push(games[i])
                }
            }

        }


    }
    for (let i=0;i<data.length; i++)
    console.log(data[i])
}


