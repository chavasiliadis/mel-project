import Navbar from "./Navbar";
import Footer from "./Footer";
import data from  "../data/imagedata";
import ImageComponent from "./imageComponent";
import NavbarPhones from "./NavbarPhones";
import $ from "jquery";
import { useEffect } from "react";
import {v4 as uuidv4} from "uuid";


const Projects = () => {


   
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
            <Navbar/>
            <NavbarPhones/>
            <div  id="containerWhiteSpace">
                    <div className="projectsGrid">
                    {
                        data.map(element=>{
                            return ( 
                                <ImageComponent key={uuidv4()} props={element}/>
                            )
                        })
                    }

                    <div className="loading-project">loading more <span className="dot-collision"></span></div>

                    </div>

                    <Footer/>
            </div>
        </>

     );
}
 
export default Projects;