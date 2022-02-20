
const hamburger=document.querySelector("#hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    if(navMenu.style.left === "0px"){
        navMenu.style.left = "-100%";
        hamburger.innerText="menu";
    }else{
        navMenu.style.left = "0px"
        hamburger.innerText="close";
    } 
})


