import { motion } from "framer-motion";
// import { useState } from "react":

import { MdOutlineLightbulb } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

function Tagle1({isOn, setIsOn}) {
    // const [isOn, setIsOn] = useState(false)

    // const toggleSwitch = () => setIsOn(!isOn)

    

    

        const toggleSwitch = () => {
        setIsOn(prev => !prev);
    };


    return (
        <div className="flex  gap-2 items-center">
            <div><MdOutlineLightbulb /></div>
            <button
                className="toggle-container"
                style={{
                    ...container,
                    justifyContent: "flex-" + (isOn ? "start" : "end"),
                }}
                onClick={toggleSwitch}
            >
                <motion.div
                    className="toggle-handle"
                    style={handle}
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
    border: "1px solid white",
    position: "relative"
}

const handle = {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",

}

const container2 = {
    width: 75,
    height: 25,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
    border: "1px solid white",
    position: "relative"
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