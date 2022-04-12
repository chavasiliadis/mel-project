import { useState } from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

const HomeImageComponent = ({wholeObj}) => {
    const [imgX,setImgX] = useState(true);
    return (
      <Link style={{textDecoration:"none"}} to={wholeObj.path}>
        <div style={{position:"relative"}} onMouseEnter={()=>setImgX(false)} onMouseLeave={()=>setImgX(true)}>
            {imgX ? <div ><img src={wholeObj.homeImg} alt="projects" key={uuidv4()}></img></div>
           :<>  
                <div className={`hoveredHomeImg${wholeObj.simplePath}`}><p>{wholeObj.text.title}</p> <p>interior</p></div>
            </>
            }
        </div>
       
      </Link>
        
     );
}
 
export default HomeImageComponent;