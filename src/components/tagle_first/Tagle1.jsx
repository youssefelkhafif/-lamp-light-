import { motion } from "framer-motion";
// import { useState } from "react";

import { MdOutlineLightbulb } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

function Tagle1({ isOn, setIsOn , isOn2}) {

    // const containf = isOn2 == false ? (isOn ? container : container2) : (isOn ? container2 : container)  ; 
    // const handlf = isOn2 == false ?  (isOn ? handle : handle2) : (isOn ? handle2 : handle)  ; 

    // const containt = isOn2  == true ? (isOn ? container2 : container) : (isOn ? container2 : container) ;
    // const handlt = isOn2  == true ? (isOn ? handle2 : handle) : (isOn ? handle2 : handle)  ;
    
    // const contain = (isOn2 || !isOn2 ? containt : containf )
    // const handl = (isOn2 || !isOn2 ? handlt : handlf) 




const contain = isOn2 ? container2 : container;
const handl   = isOn2 ? handle2 : handle;



    const toggleSwitch = () => {
        setIsOn(prev => !prev);

    };


    return (
        <div className="flex  gap-2 items-center">
            <div><MdOutlineLightbulb /></div>
            <button
                className="toggle-container"
                style={{
                    ...contain,
                    justifyContent: "flex-" + (isOn ? "start" : "end"),
                }}
                onClick={toggleSwitch}
            >
                <motion.div
                    className="toggle-handle"
                    style={handl}
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.2,
                    }}
                />
            </button>
            <div><HiOutlineLightBulb /></div>


        </div>
    );
}

const container = {
    width: 75,
    height: 25,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
    border: "1px solid currentColor",
    color: "black",          
    position: "relative"
}

const container2 = {
    width: 75,
    height: 25,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
    border: "1px solid currentColor",
    color: "white",         
    position: "relative"
}


const handle = {
    width: 20,
    height: 20,
    backgroundColor: "black",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",

}



const handle2 = {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",

}


export default Tagle1;