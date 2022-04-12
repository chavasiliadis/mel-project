import Footer from "./Footer";
import {allProjects} from "../data/allProjects";
import imagedata from "../data/imagedata";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import NavbarPhones from "./NavbarPhones";
import { useParams } from "react-router";
import $ from "jquery";

const EachProject = () => {
    const [burgerColor,setBurgerColor] = useState("white");


    const {simplePath} = useParams();

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])




    // imageData and styling
    // console.log(props.path); -> each path at each time 

    let imgData = imagedata.filter(project=>project.simplePath===simplePath)[0]


    useEffect(()=>{
        // it enters without problems

        $(document).on("scroll", function(e){
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 

            let cont = document.getElementById("containerWhiteSpace");

            if(imgData.imgsrc){
                // periptosi nav absolute!
                setBurgerColor("#00235B")
                let interv = setInterval(() => {
                    const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                    let bounding = cont.getBoundingClientRect();
                    if(bounding.top===0){
                        navbarscroll.classList.remove("activateDisplayBlock")
                        clearInterval(interv)
                        setBurgerColor("white")
                    }  
                }, 250);
            }else{
                let interv = setInterval(() => {
                    const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                    let bounding = cont.getBoundingClientRect();
                    if(bounding.top===100){
                        navbarscroll.classList.remove("activateDisplayBlock")
                        clearInterval(interv)
                    }  
                }, 250);
            }
        })

        $(document).on("touchmove" , function(e){ 
            const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
            navbarscroll.classList.add("activateDisplayBlock"); 
            if (imgData.imgsrc) {
                setBurgerColor("#00235B")
            }
        })
        
        
        $(document).on("touchend", function(e){
            let cont = document.getElementById("containerWhiteSpace");
            if(imgData.imgsrc){
                console.log("den eimai to video!")
                let interv = setInterval(() => {
                    const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                    let bounding = cont.getBoundingClientRect();
                    console.log(bounding.top);
                    if(bounding.top===0){
                        navbarscroll.classList.remove("activateDisplayBlock")
                        clearInterval(interv)
                        setBurgerColor("white")
                    }  
                }, 250);
            }else{
                console.log("eimai to video!")
                let interv = setInterval(() => {
                    const navbarscroll = document.getElementsByClassName("uniqueDisplay")[0];
                    let bounding = cont.getBoundingClientRect();
                    if(bounding.top===100){
                        navbarscroll.classList.remove("activateDisplayBlock")
                        clearInterval(interv)
                    }  
                }, 250);
            }
            
        })

        return () => {
            console.log("kathe pote trexei auti i malakia?");
            $(document).off("touchmove");
            $(document).off("touchend");
            $(document).off("scroll");
            // setBurgerColor("white");
        }
    
    })

    const style = {
        background : 'url("./images/melinas_images/firstProject.png") no-repeat center/cover',
        width : "99.1vw",
        height: "100vh"
    }

    const imgstyle = {
        width: "100%", 
        height: "100%"
    }

    // all image paths
    let allPaths = imagedata.map(project=>project.simplePath);

    let titleOfTheComponent = imagedata.filter(project=>project.simplePath=== simplePath).map(obj=>obj.text.title)[0];

    // dataToRender from the Component
    let dataToRender = allProjects.filter(project=>project["title"]===titleOfTheComponent)[0];

    // finding the previous + next path
    let previousPath= allPaths.indexOf(simplePath)!==0?"/projects/"+allPaths[allPaths.indexOf(simplePath)-1]:"#";
    
    let nextPath = allPaths.indexOf(simplePath)!==allPaths.length-1?"/projects/"+allPaths[allPaths.indexOf(simplePath)+1]:"#";
    
    if (nextPath === "/projects/undefined") nextPath= allPaths.indexOf(simplePath)!==allPaths.length-1?"/projects/"+allPaths[allPaths.indexOf(simplePath)+2]:"#";
    if (previousPath === "/projects/undefined") previousPath = allPaths.indexOf(simplePath)!==0?"/projects/"+allPaths[allPaths.indexOf(simplePath)-2]:"#";

    console.log('the previous path is ');
    console.log(previousPath);
    return ( 
        <>
            {/* MOBILE */}
            {imgData.imgsrc?
            <NavbarPhones color={burgerColor}/>
            : <NavbarPhones color="#00235B"/>
            }

            {/* DESKTOP */}
            {imgData.imgsrc?
                <Navbar absolute="absolute" />
                : <Navbar frisia="frisia"/>
            }
            <div id="containerWhiteSpace">
                {imgData.imgsrc?
                    <div className="imgProjectsFix" style={style}><img style={imgstyle} src={imgData.imgsrc} alt="The project" /></div>:
                   <div className="VIDEOSdiv">
                    <video className="VIDEO" loop autoPlay muted>
                            <source src={imgData.videosrc}  type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                    </div>
                }
                    <div className="containerOfProjects">
                        <p data-aos="fade-up" data-aos-duration="1000">{dataToRender.title}</p>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p><span>Typology:</span>{dataToRender.pis.Typology}</p>
                            <p><span>Client:</span> {dataToRender.pis.Client}</p>
                            <p><span>Location:</span>{dataToRender.pis.Location}</p>
                            <p><span>Year:</span>{dataToRender.pis.Year}</p>
                            <p><span>Status:</span>{dataToRender.pis.Status}</p>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="4000">{dataToRender.description}</p>
                    </div>

                    { typeof imgData.img2 == "string" && imgData.img2!==""?
                        <div className="singleImg">
                            <img src={imgData.img2} alt="project" />
                        </div>
                    : imgData.img2!=="" &&

                        <div className="middleImg">
                            <img src={imgData.img2.img2_1} alt="first" />
                            <img src={imgData.img2.img2_2} alt="second" />
                        </div>   
                    }

                    <div className="threeQuarterPart">
                        {dataToRender.threeQuarter.title!=="" &&
                        <>
                            <p data-aos="fade-up" data-aos-duration="1500">{dataToRender.threeQuarter.title.split(" ").slice(0,3).join(" ")} <br />{dataToRender.threeQuarter.title.split(" ").slice(3).join(" ")}</p>
                            <p data-aos="fade-up" data-aos-duration="1500">{dataToRender.threeQuarter.description}</p>
                        </>
                        }
                    </div>

                    { typeof imgData.img3 == "string" && imgData.img3!==""?
                        <div className="singleImg">
                            <img src={imgData.img3} alt="" />
                        </div>
                    : imgData.img3!=="" &&

                        <div className="middleImg">
                            <img src={imgData.img3.img3_1} alt="first" />
                            <img src={imgData.img3.img3_2} alt="second" />
                        </div>   
                    }

                
                    { typeof imgData.img4 == "string" && imgData.img4!==""?
                        <div className="singleImg" >
                            <img src={imgData.img4} alt="" />
                        </div>
                    : imgData.img4!=="" &&

                        <div className="middleImg">
                            <img src={imgData.img4.img4_1} alt="first" />
                            <img src={imgData.img4.img4_2} alt="second" />
                        </div>   
                    }


                    { typeof imgData.img5 == "string" && imgData.img5!=="" && imgData.img5?
                        <div className="imgProjectsFix" style={style}><img style={imgstyle} src={imgData.img5} alt="whatever" /></div> 

                    : imgData.img5!=="" && imgData.img5 &&

                        <div className="middleImg">
                            <img src={imgData.img5.img5_1} alt="first" />
                            <img src={imgData.img5.img5_2} alt="second" />
                        </div>   
                    }

                    {/* previous - next */}

                    <div className="previousnext">
                        <div>
                            <Link to={previousPath} className="previous">Previous project</Link>
                            <span className="linePreviousNextprevious"></span>
                            <span className="linePreviousNextOverItprevious"></span>
                        </div>

                        <div>
                            <Link to={nextPath} className="next">Next project</Link>
                            <span className="linePreviousNextnext"></span>
                            <span className="linePreviousNextOverItnext"></span>

                        </div>
                    </div>

                    {/* previous - next | end */}

                <Footer/>
            </div>
        </>
     );
}
 
export default EachProject;