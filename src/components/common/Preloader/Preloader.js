import preloader from "../../../assets/images/preloader.gif";
import React from "react";


let Preloader = (props) => {
    return  <div>
                <img src={preloader} width={100} height={100}/>
            </div>
}

export default Preloader