const hamburgerIcon=document.querySelector("#hamburger-icon");
const hamburgerListContainer=document.querySelector("#hamburger-list-container");

hamburgerIcon.addEventListener("click",()=>{
    if(hamburgerListContainer.style.left==="0px"){
        hamburgerListContainer.style.left="-100%"
        hamburgerIcon.innerText="menu"
        
    }else{
        hamburgerListContainer.style.left="0px"
        hamburgerIcon.innerText="close"
    }
})