import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarPhones from "./NavbarPhones";
import Aos from "aos";
import { useEffect } from "react";
import $ from "jquery";
import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import plusOrange from "../images/imagesFINAL/PLUS/Devices\ orange\ 1.jpg";
import phonePlusImg from "../images/imagesFINAL/PLUS/iPhone\ othoni\ new.png";
import lastImgPlus from "../images/imagesFINAL/PLUS/mac\ screen.jpg";
import lastImgPlus2 from "../images/imagesFINAL/PLUS/mac\ screen\ 2.jpg";


const Plus = () => {

    const [counter,setCounter] = useState(0);


    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 200,
      config: config.molasses,
    //   onRest: () => set(!toggle),
      onRest: () => {
        if (counter !== 2){
            set(!toggle);
            setCounter(counter+1);
        }
    }
    })




   
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
                if(bounding.top===100){
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
                if(bounding.top===100){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    clearInterval(interv)
                }
            }, 250);
            
        })

        return () => {
            $(document).off("touchmove");
            $(document).off("touchend");
            $(document).off("scroll")
        }
    
    })

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

    return ( 
        <div className="wrapPlus">
            <NavbarPhones/>
            <Navbar plus="plus"/>
            <div id="containerWhiteSpace">
                <div className="headerPlus">
                    <p><span>P</span>LAYFUL, <span>L</span>EADING, <span>U</span>NCONVENTIONAL, <span>S</span>TRONG, <span>P</span>LAYFUL, <span>L</span>EADING, <span>U</span>NCONVENTIONAL, <span>S</span>TRONG</p>
                    <p><span>U</span>NCONVENTIONAL, <span>S</span>TRONG, <span>P</span>LAYFUL, <span>L</span>EADING, <span>U</span>NCONVENTIONAL, <span>S</span>TRONG, <span>P</span>LAYFUL, <span>L</span>EADING</p>
                    <p><span>L</span>EADING, <span>U</span>NCONVENTIONAL, <span>S</span>TRONG, <span>P</span>LAYFUL, <span>L</span>EADING, <span>U</span>NCONVENTIONAL, <span>S</span>TRONG, <span>P</span>LAYFUL</p>
                </div>

                <div className="imagePlus"><img src={plusOrange} alt="a phone" /></div>
                <div className="plusmiddle">
                    <p data-aos="fade-up" data-aos-duration="1000">Strategic communication is a PLUS.</p>
                    <p data-aos="fade-up" data-aos-duration="1100">We believe that great projects are created when insight and vision meet. Understanding our clients’ business and challenges and setting feasible, long term objectives from the beginning is the key to a viable future. Through developing a business case and following an initial strategic planning, ideas and concepts can be transformed into well-grounded and sustainable projects. <br /><br />We see web design as a means of communicating our final ‘product’. Our aim is to determine a creative, efficient and coherent way of spreading a message, expressing an idea, creating an experience, promoting a brand.</p>
                </div>

                <div className="phonePlus">
                    <img src={phonePlusImg} alt="phone plus" />
                    <p>Influenced by art, architecture design and technology we create playful, leading, unconventional and strong digital content.</p>
                </div>

                <div className="lastPlusImg">

                {
                    transitions(({ opacity }, item) =>
                    item ? (
                    <animated.div
                        style={{
                        position: 'absolute',
                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                        }}>
                        <img src={lastImgPlus} alt="architecture "></img>
                    </animated.div>
                    ) : (
                    <animated.div
                        style={{
                        position: 'absolute',
                        opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                        }}>
                        <img src={lastImgPlus2} alt="architecture"></img>
                    </animated.div>
                    )
                )
                }

                </div>

                <Footer/>
            </div>
        </div>
     );
}
 
export default Plus;