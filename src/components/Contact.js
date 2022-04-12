import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarPhones from "./NavbarPhones";
import $ from "jquery";
import { useEffect } from "react";
const Contact = () => {


    useEffect(()=>{
        // it enters without problems

        $(document).on("scroll", function(e){
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            console.log(document.getElementsByClassName("bm-cross-button")[0]);

            let cont = document.getElementById("containerWhiteSpace");
            let interv = setInterval(() => {
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top>0){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    clearInterval(interv)
                }
            }, 250);
        })

        $(document).on("touchmove" , function(e){ 
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
        })
        
        
        $(document).on("touchend", function(e){
            let cont = document.getElementById("containerWhiteSpace");
            let interv = setInterval(() => {
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top>0){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    clearInterval(interv)
                }
            }, 250);
            
        })

        return () => {
            $(document).off("touchmove");
            $(document).off("touchend");
            $(document).off("scroll");
        }
    
    })

    return ( 
        <>
            <NavbarPhones/>
            <Navbar/>
            <div  id="containerWhiteSpace">
                <div className="containerContact">
                    <p>Have a project in mind? <br />Let's talk!</p>
                    <p>You have a project, an idea, an inspiration, <br /> an ambition or you just want to know more <br /> about us?
                    <br /> <br /> Do not hesitate to contact us!</p>

                    <p><a href="mailto:studio@fzin.it">studio@fzin.it</a>
                    <br /><br /> +393334911572
                    <br /><br /> Via Abbadesse 52
                    <br /> 20124, Milan IT
                    </p>
                </div>
                <Footer/>
            </div>
        </>

     );
}
 
export default Contact;