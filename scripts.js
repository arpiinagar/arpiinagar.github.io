var seconds = 5;
var c = document.getElementsByTagName("button")
function after(){
    document.getElementById("text-up").textContent = "Path Secured";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("tick").style.visibility = "visible";
    c[0].style.opacity= "1.0";
    c[0].style.cursor = "pointer";
    c[0].onmouseover = () => {
    c[0].style.padding = "10px 35px";
};
c[0].onmouseout = () => {
    c[0].style.padding = "10px 20px";
};
    } 
function during(){
    c[0].style.opacity= "0.2";
    c[0].style.cursor = "wait";
    c[0].style.padding = "10px 20px"
}
function lmao() {
    seconds--;
    during();
    document.getElementById("text-up").textContent = "Securing your path in "+seconds;
    if (seconds <= 0) 
   {clearInterval(countdown);
    after();}
}

var countdown = setInterval(lmao, 1000);
