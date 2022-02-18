
const hamburger=document.querySelector("#hamburger");
const navMenu=document.querySelector(".nav-menu");
console.log(navMenu);
hamburger.addEventListener("click",()=>{
    if(navMenu.style.left === "-100%"){
        navMenu.style.left = "0";
        hamburger.innerText="close";
    }else{
        navMenu.style.left = "-100%"
        hamburger.innerText="menu";
     
    }
    
})