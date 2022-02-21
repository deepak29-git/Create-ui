


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


const lightModeTheme=()=>{
    body.style.backgroundColor="white"
        body.style.color="var(--dark-color)"
        darkMode.innerText="dark_mode"
        header.style.backgroundColor="white"
        logoTitle.style.color="var(--dark-color)"
        listTitle.style.color="white"
        homeIcon.style.color="var(--dark-color)"
        for(let i=0; i<showComponent.length;i++){
            showComponent[i].style.backgroundColor="var(--accent-color)"
        }
        for(let i=0;i<componentLink.length; i++){
            componentLink[i].style.color="var(--dark-color)"
        }

}

const darkModeTheme=()=>{
    body.style.backgroundColor="var(--dark-color)"
    body.style.color="white"
    darkMode.innerText="light_mode"
    header.style.backgroundColor="var(--dark-color)"
    logoTitle.style.color="white"
    homeIcon.style.color="white"
    listTitle.style.color="var(--dark-color)"
    for(let i=0; i<showComponent.length;i++){
        showComponent[i].style.backgroundColor="var(--show-component-dark)"
    }
    for(let i=0;i<componentLink.length; i++){
        componentLink[i].style.color="white"

    }
}

darkMode.addEventListener("click",()=>{
    localStorage.setItem("dark-theme",darkMode.checked);
    
    if(body.style.backgroundColor==="var(--dark-color)"){
        lightModeTheme()        
    }else{
        darkModeTheme()

    }
    
})

window.addEventListener("load",(event)=>{
    if (localStorage.getItem("dark-theme") =="true"){
        darkMode.checked=true;
        darkModeTheme()
    }else{
        darkMode.checked=false;
        lightModeTheme()
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

