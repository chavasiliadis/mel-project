import $ from "jquery";


$(document).on("mousewheel", function(e){
    const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
    navbarscroll.classList.add("activateDisplayBlock"); 
  
})


$(document).on("touchmove" , function(e){ 
    $(document).trigger("mousewheel");
})


$(document).on("touchend", function(e){
    let cont = document.getElementById("containerWhiteSpace");
    setInterval(() => {
        const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
        let bounding = cont.getBoundingClientRect();
        if(bounding.top>0){
            navbarscroll.classList.remove("activateDisplayBlock")
        }
    }, 250);
    
})