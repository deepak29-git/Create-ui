


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
    if(body.style.backgroundColor==="var(--dark-color)"){
        body.style.backgroundColor="var(--white-color)"
        body.style.color="var(--dark-color)"
        darkMode.innerText="dark_mode"
        header.style.backgroundColor="var(--white-color)"
        logoTitle.style.color="var(--dark-color)"
        listTitle.style.color="var(--white-color)"
        homeIcon.style.color="var(--dark-color)"
        for(let i=0; i<showComponent.length;i++){
            showComponent[i].style.backgroundColor="var(--accent-color)"
        }
        for(let i=0;i<componentLink.length; i++){
            componentLink[i].style.color="var(--dark-color)"
        }
        
    }else{
        body.style.backgroundColor="var(--dark-color)"
        body.style.color="var(--white-color)"
        darkMode.innerText="light_mode"
        header.style.backgroundColor="var(--dark-color)"
        logoTitle.style.color="var(--white-color)"
        homeIcon.style.color="var(--white-color)"
        listTitle.style.color="var(--dark-color)"
        for(let i=0; i<showComponent.length;i++){
            showComponent[i].style.backgroundColor="var(--show-component-dark)"
        }
        for(let i=0;i<componentLink.length; i++){
            componentLink[i].style.color="var(--white-color)"

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

