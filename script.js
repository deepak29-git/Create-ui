


// dark mode


const darkMode=document.querySelector("#dark-mode");
const body=document.querySelector("body");
const header=document.querySelector(".header")
const logoTitle=document.querySelector(".logo-title")
const componentLink=document.querySelectorAll(".component-link")
const listTitle=document.querySelector(".list-title");
const homeIcon=document.querySelector("#home-icon")
const showComponent=document.querySelectorAll(".show-component");
const hamburger=document.querySelector("#hamburger");
const navMenu=document.querySelector(".nav-menu");

darkMode.addEventListener("click",()=>{
    if(body.style.backgroundColor==="black"){
        body.style.backgroundColor="white"
        body.style.color="black"
        darkMode.innerText="dark_mode"
        header.style.backgroundColor="white"
        logoTitle.style.color="black"
        listTitle.style.color="white"
        homeIcon.style.color="black"
        for(let i=0; i<showComponent.length;i++){
            showComponent[i].style.backgroundColor="var(--accent-color)"
        }
        for(let i=0;i<componentLink.length; i++){
            componentLink[i].style.color="black"
        }
        
    }else{
        body.style.backgroundColor="black"
        body.style.color="white"
        darkMode.innerText="light_mode"
        header.style.backgroundColor="black"
        logoTitle.style.color="white"
        homeIcon.style.color="white"
        listTitle.style.color="black"
        for(let i=0; i<showComponent.length;i++){
            showComponent[i].style.backgroundColor="var(--show-component-dark)"
        }
        for(let i=0;i<componentLink.length; i++){
            componentLink[i].style.color="white"

        }
        
    }
})





hamburger.addEventListener("click",()=>{
    if(navMenu.style.left === "0px"){
        navMenu.style.left = "-100%";
        hamburger.innerText="menu";
    }else{
        navMenu.style.left = "0px"
        hamburger.innerText="close";
    } 
})

