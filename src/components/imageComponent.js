import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Link } from "react-router-dom";
import villa from "../images/imagesFINAL/menu/olive\ trees\ villa.jpg";
import frisia from "../images/imagesFINAL/menu/frisia.jpg"
import countryhouse from "../images/imagesFINAL/menu/countryside\ house.jpg";
import house00 from "../images/imagesFINAL/menu/house\ 00.jpg";
import ama from "../images/imagesFINAL/menu/ama\ lamp.jpg";
import amfithea from "../images/imagesFINAL/menu/amfithea.jpg";
import innovation from "../images/imagesFINAL/menu/innovation\ center.jpg";

const ImageComponent = (props) => {
    const [imgX,setImgX] = useState(true);
    let element = props.props, imgSRC;

    switch(element.text.title){
      case "Olive trees villa":
        imgSRC= villa;
        break;
      case "Frisia 1904":
        imgSRC= frisia;
        break;
      case "Countryside house":
        imgSRC= countryhouse;
        break;
      case "House 00":
        imgSRC= house00;
        break;
      case "AMA lamp":
        imgSRC = ama;
        break;
      case "Amfithea":
        imgSRC = amfithea;
        break;
      case "Innovation Center":
        imgSRC = innovation;
        break;
      default:
        imgSRC="#"
        break;
    }
    
    return (
      <Link style={{textDecoration:'none', color: '#00235B'}} to={element.simplePath ? `/projects/${element.simplePath}`: "#"}>
        <div onMouseEnter={()=>setImgX(false)} onMouseLeave={()=>setImgX(true)}>
            {imgX ? <div ><img src={imgSRC} alt="projects" key={uuidv4()}></img></div>
         : <div className="project_hovered" key={uuidv4()}>
            <h1 className="project_title">{element.text.title}</h1>
            <p className="project_text">{element.text.category}</p>
            <p className="project_text">{element.text.location}</p>
            <p className="project_text">{element.text.process}</p>
          </div>}
        </div>
      </Link>
        
     );
}
 
export default ImageComponent;