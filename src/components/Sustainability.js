import Navbar from "../components/Navbar";
import Footer from "./Footer";
import LifeGreen from "../images/leaf_green.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavbarPhones from "./NavbarPhones";
import $ from "jquery";
import { Waypoint } from 'react-waypoint';


const Sustainability = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[]);

    
    useEffect(()=>{
        // it enters without problems

        $(document).on("scroll", function(e){
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            // console.log(document.getElementsByClassName("bm-cross-button")[0]);

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
            $(document).off("scroll");
        }
    
    })



    
    function increment(elem, finalVal) {
        
        var currVal = Number(elem.innerHTML);
        if (currVal < finalVal) {
            console.log("The currV is : " + currVal)
            if(Number(currVal)>= 1000){
                currVal+=50;
                elem.innerHTML = currVal;
            }else{
                currVal++;
                elem.innerHTML = currVal;
            }
        if(Number(currVal) >= 1000){
            elem.style.width = "125px";
        }

        if(Number(currVal)>10000){
            elem.style.width = "165px";
        }

       
    
        setTimeout(function() {
            increment(elem, finalVal);
        }, 2)
        }
    };

    

    // let waypoint = new Waypoint({
    //     element: document.getElementById("timers"),
    //     handler: increment("timers",100) 
    // })



    return (
        <>  
            <NavbarPhones/>
            <Navbar/>
            <div  id="containerWhiteSpace">
                <div className="titleSustainability">Empowering a green mindset.</div>
                <div className="lifeGreen">
                    <img  src={LifeGreen} alt="life green" />
                </div>
                <div className="contributionSustainability">
                    <p>OUR CONTRIBUTION</p>
                    <div className="contribution-info">
                        <div className="contribution-box">
                            {/* <object type="image/svg+xml" data={HouseLogo} class="logo"></object> */}
                            <div>
                                <div style={{textAlign:"left"}}>
                                    <Waypoint onEnter={()=>{
                                        console.log('entered');
                                        const timer1 = document.getElementById("timer1");
                                        increment(timer1,1000);
                                        }}>
                                        <span id="timer1" className="timer">0</span>  
                                    </Waypoint>
                                    
                                    energy performance certifications
                                </div>
                                <p>We develop energy performance certifications which provide a means of rating individual buildings on how efficient (or inefficient) they are in relation to the amount of energy needed to provide users with expected degrees of comfort and functionality. This procedure gives us the opportunity to understand which interventions can improve the energy performance of the building.</p>
                            </div>
                        </div>
                        <div className="contribution-box" style={{"justifyContent": "center"}}>
                            {/* <object type="image/svg+xml" data={SolarPanels} class="logo"></object> */}
                            <div>
                                <div style={{textAlign:"left"}}>
                                    <Waypoint onEnter={()=>{
                                        console.log('entered');
                                        const timer2 = document.getElementById("timer2");
                                        increment(timer2,20000);
                                        }}>
                                        <span id="timer2" className="timer">0</span>
                                    </Waypoint>

                                      installed solar panels
                                      
                                      </div>
                                <p>Solar panels are an easy way to produce clean, renewable energy for buildings. With the support of specialized consultants we are able to assist our clients with the study and design of their system but also the necessary permits for the installation.</p>
                            </div>
                        </div>
                        <div className="contribution-box">
                            {/* <object type="image/svg+xml" data={Electricity} class="logo"></object> */}
                            <div>
                                <div style={{textAlign:"left"}}>
                                    <Waypoint onEnter={()=>{
                                        const timer3 = document.getElementById("timer3");
                                        increment(timer3,7000);
                                        }}>
                                        <span id="timer3" className="timer">0</span>
                                    </Waypoint>
                              

                                      KW renewable energy
                                    
                                    </div>
                                <p>This is an estimation of the amount of renewable energy generated due to the interventions we have studied. We are very happy to be able to contribute in our own way towards a more sustainable greener future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutSustainability">
                    <div data-aos="fade-up" data-aos-duration="1000">Sustainability is not a <br />choice, it's a necessity</div>
                    <p data-aos="fade-up" data-aos-duration="1000">While buildings and construction account for more than 35% of the global energy use and around 40% of the energy related with CO2 emissions, sustainable strategies for the design and construction of buildings and cities have become a crucial necessity. Our scope is to provide a sustainable approach to the design of our projects reflected in the use of building materials, resources and construction methods. In this way we aim to deliver projects with high level performance which can bring environmental, economic and social benefits. We believe that the key to a sustainable design is the delicate balance between form, function and interactions with the surrounding environment.</p>
                </div>
            <Footer/>   
            </div>
            
        </>
     );
}
 
export default Sustainability;