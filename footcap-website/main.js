 let menu= document.querySelector(".ri-menu-fill");




 menu.addEventListener("click", function (){
    let rightMenu= document.querySelector(".yan_menu");
    let carpi=document.querySelector(".ri-close-fill");

    if(rightMenu.style.display==="none")
    {
        rightMenu.style.display="flex";
        carpi.style.display="flex";
        carpi.addEventListener( "click", function() {

            rightMenu.style.display="none";
            carpi.style.display="none"

        })

    }
    else{
        rightMenu.style.display="none";
        carpi.style.display="none"
    }
                               }
 

                                                
 );