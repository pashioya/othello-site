import { gamesJson } from './gameSessions.js';

const games=JSON.parse(gamesJson);
let id=document.getElementById("gameID");
let username=document.getElementById("username");
let win=document.getElementById("win");
let lose=document.getElementById("lose");
let beforeDate=document.getElementById("beforeDate");
let afterDate=document.getElementById("afterDate")
let comparator = document.getElementById("comparison")
let tablePlayer = document.getElementById("tablePlayer")
let tableScore = document.getElementById("tableScore")

let isWin;
let data=[];



let button=document.getElementById("submit");
button.addEventListener("click", submit);

if(window.localStorage.getItem("role")==="user"){
    username.value=window.localStorage.getItem("username");
    username.disabled=true;
}

tablePlayer.addEventListener("click", ev =>  data.sort((firstItem, secondItem) => firstItem.username - secondItem.username) && loadTable(data))
tableScore.addEventListener("click", ev => data.sort((firstItem, secondItem) => firstItem.number_stones_user - secondItem.number_stones_user) && loadTable(data) )



function filterData(element) {
    const element_timestamp = Date.parse(element.start_date_time);
    const element_dateObject = new Date(element_timestamp);


    if (id.value) {
        if (element.gamesession_id == id.value) return true;
        return false;
    }
    if (username.value) {
        if (element.username == username.value) return true;
        return false;
    }
    if (score.value) {
        switch (comparator.value) {
            case "above": {
                return element.number_stones_user > score.value
            }
            case "below": {
                return element.number_stones_user < score.value
            }
            case "equals": {
                return element.number_stones_user === score.value
            }
        }

    }
    if (win.checked === true) {
        return element.user_won
    } else if (lose.checked === true) {
        return !element.user_won
    }
    if (beforeDate.value) {
        const before_timestamp = Date.parse(beforeDate.value);
        const before_dateObject = new Date(before_timestamp);

        return before_dateObject >= element_dateObject
    }
    if (afterDate.value) {
        const after_timestamp = Date.parse(afterDate.value);
        const after_dateObject = new Date(after_timestamp);

        return after_dateObject <= element_dateObject
    }
}


function loadTable(data){
    let tbody=document.getElementById("tbody");
    let dataHtml='';
    for (let line of data){
        dataHtml+=`<tr>
                    <td>${line.gamesession_id}</td>
                    <td>${line.start_date_time}</td>
                    <td>${line.time_elapsed}</td>
                    <td>${line.is_over}</td>
                    <td>${line.user_won}</td>
                    <td>${line.username}</td>
                    <td>${line.computer_name}</td>
                    <td>${line.number_stones_user}</td>
                   </tr>`;

    }
    console.log(dataHtml)

    tbody.innerHTML=dataHtml;


}

function sortTable(){
    data.sort((firstItem, secondItem) => firstItem.username - secondItem.username);
}



function submit(event) {
    event.preventDefault();



    data = games.filter(filterData);
    console.log(data)

    loadTable(data);



}


