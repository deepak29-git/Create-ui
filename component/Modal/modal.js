const showDemo=document.querySelector(".show-demo");
const modal=document.querySelector(".modal")
const closeBtn=document.querySelector(".close-btn");
const closeIcon=document.querySelector(".close-icon");


modal.style.display="none";
showDemo.addEventListener("click",()=>{
    modal.style.display="block";
    modal.style.position="fixed";
    modal.style.top="0";
});

closeBtn.addEventListener("click",()=>{
    modal.style.display="none";
})

closeIcon.addEventListener("click",()=>{
    modal.style.display="none";
})