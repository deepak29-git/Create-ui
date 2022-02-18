// const nightModeIcon=document.querySelector(".nightmode-icon");
// const body=document.querySelector("body");
// const sidebarLink=document.querySelectorAll(".component-link");
// const logoTitle=document.querySelector(".logo-title");
// const navItem=document.querySelectorAll(".item");
// const header=document.querySelectorAll(".header");


// nightModeIcon.addEventListener("click",()=>{
//     if(body.style.backgroundColor !=="var(--dark-color)"){
//         body.style.backgroundColor="var(--dark-color)"
//         body.style.color="var(--white-color)";
//         nightModeIcon.src = "/assets/img/sunny.png"
//         logoTitle.style.color="var(--white-color)"
//         header[0].style.backgroundColor="var(--dark-color)"
//         for(let i=0;i<navItem.length;i++){
//             navItem[i].style.color="var(--white-color)"   
//         }

//         for(let i=0;i<sidebarLink.length;i++){
//             sidebarLink[i].style.color="var(--white-color)"
//         }
//     }else{
//         body.style.backgroundColor="var(--white-color)"
//         body.style.color="var(--dark-color)"
//         logoTitle.style.color="var(--black-color)"
//         nightModeIcon.src = "/assets/img/nightmode.png"
//         header[0].style.backgroundColor="var(--white-color)"
//         for(let i=0;i<navItem.length;i++){
//             navItem[i].style.color="var(--black-color)"
            
//         }
//         for(let i=0;i<sidebarLink.length;i++){
//             sidebarLink[i].style.color="var(--black-color)"
//         }

//     }
// })

const hamburger=document.querySelector("#hamburger");
const navMenu=document.querySelector(".nav-menu");
console.log(navMenu);
hamburger.addEventListener("click",()=>{
    if(navMenu.style.left === "-100%"){
        navMenu.style.left = "0";

        // navMenu.style.backgroundColor = "white";
        hamburger.innerText="close";
    }else{
        navMenu.style.left = "-100%"
        hamburger.innerText="menu";
        // navMenu.style.display = "block"; 
     
    }
    
})