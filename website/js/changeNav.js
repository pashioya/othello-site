let logCheck=window.localStorage.getItem("isLogin");
console.log(window.location.pathname);
const logButton=document.querySelector(".login");
let str="Log out";
if(logCheck==="true"){
    let logOutButton=document.querySelector(".login");
        logOutButton.innerHTML = str;
        logOutButton.innerText = str;
        logOutButton.text= str ;
        let stat=document.querySelector(".stat");
        stat.innerHTML = "Statistics";
        stat.innerText = "Statistics";
        stat.text= "Statistics" ;

        stat.addEventListener("click", evt => {
            if (window.location.pathname=="/othello-website/website/index.html"){
                window.location.href="./html/Stat.html";}

            else { window.location.href="Stat.html";}
        })

    logButton.addEventListener("click", ev => {
        if(window.location.pathname==="/Othello_Website/html/Stat.html"){
            window.location.href="/Othello_Website/index.html";
            window.localStorage.clear();
        }
        else {window.localStorage.clear();
            window.location.reload();}
    })
}
else {
    logButton.addEventListener("click", e => {
        if (window.location.pathname === "/othello-website/website/index.html") {
            window.location.href = "./html/Login.html";
        } else {
            window.location.href = "Login.html";
        }
    })
}