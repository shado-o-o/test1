let com=document.querySelector(".com");
let item=document.querySelectorAll(".com div");
let btn=document.querySelector(".add");
let btnicon=document.querySelector(".fa-bars");
{/* <i class="fa-solid fa-xmark"></i> */}
btn.addEventListener("click",()=>{
   let act= com.classList.toggle("active-com");
    btnicon.classList.toggle("fa-bars");
    btnicon.classList.toggle("fa-xmark");
    
})
let mass=document.querySelector(".mass");
let massh=document.querySelector(".mass h1");
item.forEach(element => {
    element.addEventListener("click",async ()=>{
        mass.style.height="100px";
        mass.style.opacity=1;
        massh.innerHTML=element.innerHTML;
        await setTimeout(() => {
            mass.style.height="0px";
            mass.style.opacity=0;
        }, 5000)

    })
});
// header///////////////////////////////////
let btnHeader=document.querySelector(".btn-respose-h");
let comHeader=document.querySelector(".com-h");
 btnHeader.addEventListener("click",()=>{
   
    btnHeader.classList.toggle("active-btn-h"); 
    if(btnHeader.classList.contains("active-btn-h")){
         comHeader.style.height="500px";
    }
    else{
        comHeader.style.height="0px";
    }
 })

 let links=document.querySelectorAll(".links-h a");
 let linkActive=document.querySelector(".link-active");

 for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.addEventListener("click",()=>{
        links.forEach(element => {
            element.classList.remove("active");
        });
       element.classList.add("active");
       mass.style.height="100px";
       mass.style.opacity=1;
       massh.innerHTML=element.innerHTML;
        setTimeout(() => {
           mass.style.height="0px";
           mass.style.opacity=0;
       }, 5000)

    });
 }





