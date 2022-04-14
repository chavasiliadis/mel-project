import Navbar from "./Navbar.js";
import Footer from "./Footer";
import NavbarPhones from "./NavbarPhones.js";
import { useEffect } from "react";
import $ from "jquery";
import alice from "../images/imagesFINAL/about/Alice.jpg"
import claudia from "../images/imagesFINAL/about/Claudia.jpg"
import dario from "../images/imagesFINAL/about/Dario.jpg"
import elena from "../images/imagesFINAL/about/Elena.jpg"
import franci from "../images/imagesFINAL/about/Franci.jpg"
import giorgio from "../images/imagesFINAL/about/Giorgio.jpg"
import haritini from "../images/imagesFINAL/about/Haritini.jpg"
import letizia from "../images/imagesFINAL/about/Letizia.jpg"
import melina from "../images/imagesFINAL/about/Melina.jpg"
import morena from "../images/imagesFINAL/about/Morena.jpg"
import thei from "../images/imagesFINAL/about/thei.jpg"
import thomas from "../images/imagesFINAL/about/Thomas.jpg"
import veronica from "../images/imagesFINAL/about/Veronica.jpg"
import antonis from "../images/imagesFINAL/about/antonis.jpg";
import Aos from "aos";

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

    
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
            $(document).off("scroll");
        }
    
    })
   
  
    
    



    return (  
        <>
            <NavbarPhones/>
            <Navbar/>  

            <div  id="containerWhiteSpace">
                    
                    <div className="container-about">
                        <div data-aos="fade-up" data-aos-duration="1000">
                        We are a <span className="intro-blue">community</span> with different skills, but a <span className="intro-blue">shared vision.</span>
                        </div>
                    </div>

                    <div className="main">
                        <div className="first-part-main aboutIdeas">
                            <div className="first-part-main-one">
                                <div>ABOUT US</div>
                                <p className="about-title-main">We transform ideas <br /> into solutions</p>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000" className="about-text-main">We are a multidisciplinary group of professionals with diverse backgrounds and areas of expertise aiming to find innovative solutions to complex challenges. We promote a collaborative and holistic approach to design which we believe broadens the spectrum of creativity and unveils new opportunities. <br /><br /> Our aim is to merge impactful concepts, design and new technologies to provide tailor-made solutions for every project. We are in a constant search of the best join between aesthetic beauty and technical performance which we believe leads to the well-being (ef-zin).</p>
                        </div>

                        <div className="parallax"></div>

                        <div className="main-categories">
                            <div>
                                <h3>Architecture</h3>
                                <p>Our aim is to conceive, design and build projects that contribute to the well-being (ef-zin) of the people. From the initial concept and research to the design development and construction drawings we strive to create sustainable, efficient and functional solutions which highlight the spatial and sensorial features of each site and reinforce its overall quality.</p>
                            </div>

                            <div>
                                <h3>Strategy and Branding</h3>
                                <p>We believe that great projects are created when insight and vision meet. Understanding our clients’ business and challenges and setting feasible, long term objectives from the beginning is the key to a viable future. Through developing a business case and following an initial strategic planning, ideas and concepts can be transformed into well-grounded and sustainable projects.</p>
                            </div>

                            <div>
                                <h3>BIM</h3>
                                <p>BIM can facilitate and speed up the design and construction process and as a result reduce short-term and long-term costs. It enables document management, architecture and engineering coordination as well as simulation throughout the entire lifespan of a project. Having previous experience on projects set up in BIM environment we can offer BIM services for projects of different scales and sectors. </p>
                            </div>

                            <div>
                                <h3>Web Design</h3>
                                <p>We see web design as a means of communicating our final ‘product’. Our aim is to determine a creative, efficient and coherent way of spreading a message, expressing an idea, creating an experience, promoting a brand.</p>
                            </div>

                            <div>
                                <h3>Energy</h3>
                                <p>Right from the initial phases we design our projects with a particular focus on sustainability and energy saving. We aim to deliver projects of high quality design with cutting edge tecnology that comply with innovative certifications including LEED.</p>
                            </div>
                        </div>

                        
                        <div className="first-part-main community">
                            <div className="first-part-main-two">
                                <div>OUR COMMUNITY</div>
                                <p className="about-title-main">Together we make <br /> things happen.</p>
                            </div>
                        </div>

                        <div className="people">
                            <div>
                                <img src={thomas} alt="thomas" />
                                <p>Thomas Parascandolo <br />Architect - Founder</p>
                            </div>
                            <div>
                                <img src={melina} alt="melina" />
                                <p>Melina Koutra <br />Architect - Founder</p>
                            </div>
                         
                            <div>
                                <img src={morena} alt="morena" />
                                <p>Morena Amendolagine<br />Architect</p>
                            </div>
                            <div>
                                <img src={claudia} alt="claudia" />
                                <p>Claudia Borri<br />Architect</p>
                            </div>
                            <div>
                                <img src={alice} alt="alice" />
                                <p>Alice Cajelli<br />Architect</p>
                            </div>
                            <div>
                                <img src={letizia} alt="letizia" />
                                <p>Letizia Ceriani<br />Architect</p>
                            </div>

                            <div>
                                <img src={giorgio} alt="giorgio" />
                                <p>Giorgio Gabbiadini<br />Architect</p>
                            </div>
                            <div>
                                <img src={franci} alt="Franci" />
                                <p>Francesca Granata<br />Marketing &amp; PR</p>
                            </div>
                            
                            <div>
                                <img src={haritini} alt="Haritini" />
                                <p>Haritini Koutra<br />Web Developer</p>
                            </div>
                            <div>
                                <img src={dario} alt="Dario" />
                                <p>Dario Michencigh<br />Architect</p>
                            </div>
                            <div>
                                <img src={elena} alt="elena" />
                                <p>Elena Percivalle<br />Architect</p>
                            </div>
                         
                            <div>
                                <img src={veronica} alt="veronica" />
                                <p>Veronica Pesenti Rossi<br />Architect</p>
                            </div>
                            <div>
                                <img src={thei} alt="thei" />
                                <p>Thei Tsiridou<br />Architect</p>
                            </div>
                            <div>
                                <img src={antonis} alt="antonis" />
                                <p>Antonis Zaravelas<br />Web Developer</p>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
            
        </>
     );
}
 
export default About;



/*

    const [cleanIt,setCleanIt] = useState(false);



    useEffect(()=>{
       
        
        const mouseWheel = function(e){
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            
        }

        const touchMove = function(e){
            document.body.addEventListener("wheel", mouseWheel);
        }
   
        const touchendHandler = function(e){
            console.log("entering");
            let myInterval = setInterval(() => {
                let cont = document.getElementById("containerWhiteSpace");
                console.log("inside")
                const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                let bounding = cont.getBoundingClientRect();
                if(bounding.top==100){
                    navbarscroll.classList.remove("activateDisplayBlock")
                    console.log("i am fucking inside and the cleanit is! " + cleanIt)
                }
                console.log('we passed this stage, the cleanIt is '+cleanIt)
                if (cleanIt) clearInterval(myInterval)
            }, 250);   
        }

        document.body.addEventListener("touchmove", touchMove);
        document.body.addEventListener("touchend", touchendHandler);
        
        return function cleanup(){
        
            // window.onunload = function(){
                console.log("about to clear event listeners prior to leaving page");
                setCleanIt(true);
                document.body.removeEventListener("touchend", touchendHandler);
                document.body.removeEventListener("touchmove", touchMove);
                document.body.removeEventListener("wheel", mouseWheel);
                return;
            // }

            // console.log("time to goo")
            // window.onunload();
        }   
           
    })

    */