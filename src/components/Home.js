import Navbar from "./Navbar.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import data from  "../data/imagedata";
import HomeImageComponent from "./HomeImageComponent.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import NavbarPhones from "./NavbarPhones.js";
import $ from "jquery";
import { useTransition, animated, config } from "react-spring";
import firstImg from "../images/imagesFINAL/home/night_render.jpg";
import secondImg from "../images/imagesFINAL/home/resized_for_home.jpg";
import {v4 as uuidv4} from "uuid";

const Home = () => {


    // animation goes here
    const [toggle, set] = useState(false);
    const [counter,setCounter] = useState(0);
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay:500,
      config: config.molasses,
    //   onRest: () => set(!toggle),
      onRest: () => {
          if (counter !== 2){
              set(!toggle);
              setCounter(counter+1);
          }
      }
    })

    // animation end


    const [burgerColor,setBurgerColor] = useState("white");


    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

    
    useEffect(()=>{
        // it enters without problems
        $(document).on("scroll", function(e){
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            setBurgerColor("#00235B");

            let cont = document.getElementById("containerWhiteSpace");
            let interv = setInterval(() => {
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top===0){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    setBurgerColor("white");
                    clearInterval(interv)
                }
            }, 250);
        })

        $(document).on("touchmove" , function(e){ 
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            console.log(document.getElementsByClassName("bm-cross-button")[0]);
            setBurgerColor("#00235B")
        })
        
        
        $(document).on("touchend", function(e){
            let cont = document.getElementById("containerWhiteSpace");
            let interv = setInterval(() => {
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top===0){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    setBurgerColor("white");
                    clearInterval(interv)
                }
            }, 250);
            
        })

        $(document).on("touchend", function(e){
            let cont = document.getElementById("containerWhiteSpace");
            let interv = setInterval(() => {
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top===0){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    setBurgerColor("white");
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
            <Navbar absolute="absolute"/>
            <NavbarPhones color={burgerColor}/>

              <div id="containerWhiteSpace">
                  


              {
                    transitions(({ opacity }, item) =>
                    item ? (
                    <animated.div
                        style={{
                        position: 'absolute',
                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                        }}>
                        <img className="secondPic"  alt="home Alternate" src={secondImg}></img>
                    </animated.div>
                    ) : (
                    <animated.div
                        style={{
                        position: 'absolute',
                        opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                        }}>
                        <img className="homeAlternate" alt="home Alternate" src={firstImg}></img>
                    </animated.div>
                    )
                )
                }










            
                    <div className="bigBackground">
                        <span className="scrollToContinue"></span>
                        <span className="scrollToContinueImprint"></span>
                    </div> 
                     {/* here comes the white line animation */}
                    
            
                    <div  className="containerHome">
                        <p data-aos="fade-up" data-aos-duration="1000">We design to <br/> innovate.</p>
                        <p data-aos="fade-up" data-aos-duration="1600">We are a multidisciplinary group of professionals with diverse backgrounds and areas of expertise aiming to find innovative solutions to complex challenges. We promote a collaborative and holistic approach to design which we believe broadens the spectrum of creativity and unveils new opportunities.</p>
                        <p data-aos="fade-up" data-aos-duration="2100">Our aim is to merge impactful concepts, design and new technologies to provide tailor-made solutions for every project. We are in a constant search of the best join between aesthetic beauty and technical performance which we believe leads to the well-being (ef-zin).</p>
                        <div data-aos="fade-up" data-aos-duration="2100">
                            <Link className="maybe" to="/projects">Discover more</Link>
                        </div>
                    </div>
                    
                    <div className="threeImages">
                        {
                            data.filter(x=>x.text.title==="Frisia 1904"||x.text.title==="Amfithea"||x.text.title==="Countryside house").map(x=>(
                                <HomeImageComponent key={uuidv4()} wholeObj={x}/>
                            ))
                        }
                    </div>

                    <div className="containerHome">
                        <p data-aos="fade-up" data-aos-duration="1000" >Have a project in mind? <br />Let's talk!</p>
                        <p data-aos="fade-up" data-aos-duration="1600" >You have a project, an idea, an inspiration, an ambition or you just want to know more about us? <br /> <br /> Do not hesitate to contact us!</p>
                        <p></p>
                        <div data-aos="fade-up" data-aos-duration="2100">
                            <Link className="maybe" to="/contact">Contact us</Link>
                        </div>
                    </div>

            
                   

                <Footer/>
            </div>
        </>
     );
}
 
export default Home;