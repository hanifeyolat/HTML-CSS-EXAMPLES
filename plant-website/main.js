let menuBar=document.querySelector(".ri-menu-fill");
let carpi= document.querySelector("#carpi");

let moon=document.querySelector(".ri-moon-line");
let sun=document.querySelector(".ri-sun-line");
let body=document.querySelector("body");
let navbar=document.querySelector("#navbar__ul");


let input_dark=document.querySelector("#input_dark");



menuBar.addEventListener("click", function () {

    navbar.classList.add("active");
    carpi.classList.add("active");


    carpi.addEventListener("click", function () {

        navbar.classList.remove("active");
        carpi.classList.remove("active");
    });

   if(moon.classList.contains("d_none")){
    navbar.classList.add("dark_mode_1");
   }




});

moon.addEventListener("click",()=>{
  

    moon.classList.add("d_none");
    sun.classList.remove("d_none");

   var navbar=document.getElementById("navbar");
   navbar.classList.add("dark_mode_1");

    var body=document.getElementsByTagName("body")[0];
    body.classList.add("dark_mode_1");

    var cards__container=document.getElementsByClassName("cards__container")[0];
    cards__container.classList.add("dark_mode_3");
    
    var card=document.getElementsByClassName("card");
    card[0].classList.add("dark_mode_2");
    card[1].classList.add("dark_mode_2");
    card[2].classList.add("dark_mode_2");
    
    var sss=document.getElementsByClassName("sss")[0];
    sss.classList.add("dark_mode_3");

    var input=document.getElementsByClassName("input")[0];
    input.classList.add("dark_mode_3")

    var modal__container=document.getElementsByClassName("modal__container");
    for(var i=0; i<modal__container.length;i++){

        modal__container[i].classList.add("dark_mode_2");
    
    };

    var dark=document.getElementsByClassName("dark");
    for(var i=0;i<dark.length;i++){

        dark[i].classList.add("text_white");

    };
    var dark2=document.getElementsByClassName("dark2");
    for(var i=0;i<dark2.length;i++){

        dark2[i].classList.add("text_white_2");

    };

   })

sun.addEventListener("click", ()=>{
    sun.classList.add("d_none");
    moon.classList.remove("d_none");


    var navbar=document.getElementById("navbar");
    navbar.classList.remove("dark_mode_1");
 
     var body=document.getElementsByTagName("body")[0];
     body.classList.remove("dark_mode_1");
 
     var cards__container=document.getElementsByClassName("cards__container")[0];
     cards__container.classList.remove("dark_mode_3");
     
     var card=document.getElementsByClassName("card");
     card[0].classList.remove("dark_mode_2");
     card[1].classList.remove("dark_mode_2");
     card[2].classList.remove("dark_mode_2");
     
     var sss=document.getElementsByClassName("sss")[0];
     sss.classList.remove("dark_mode_3");
 
     var input=document.getElementsByClassName("input")[0];
     input.classList.remove("dark_mode_3")
 
     var modal__container=document.getElementsByClassName("modal__container");
     for(var i=0; i<modal__container.length;i++){
 
         modal__container[i].classList.remove("dark_mode_2");
     
     };

     
 
     var dark=document.getElementsByClassName("dark");
     for(var i=0;i<dark.length;i++){
 
         dark[i].classList.remove("text_white");
 
     };
     
     var dark2=document.getElementsByClassName("dark2");
     for(var i=0;i<dark2.length;i++){
 
         dark2[i].classList.remove("text_white_2");
 
     };


})


var modal__container=document.querySelectorAll(".modal__container");
var modal__text=document.querySelectorAll(".modal__text");


   modal__container.forEach((element,index) => {
       
    element.addEventListener("click", ()=>{
        modal__text[index].classList.toggle("d_flex");

    })



   });






