import { motion } from "framer-motion";
// import { useState } from "react"

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Tagle2({isOn2, setIsOn2} ) {

        const toggleSwitch2 = () => {
        setIsOn2(prev => !prev);
    };

    const contain =  (isOn2 ? container2 : container)
    const handl =  (isOn2 ? handle2 : handle)

    return (
        <div className="flex  gap-2 items-center">
            <div><FaMoon /></div>
            <button
                className="toggle-container"
                style={{
                    ...contain,
                    justifyContent: "flex-" + (isOn2 ? "start" : "end"),
                }}
                onClick={toggleSwitch2}
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
            
            <div><MdSunny /></div>

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


export default Tagle2;