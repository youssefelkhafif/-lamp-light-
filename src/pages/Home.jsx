import Nav_bar from "../components/nav_bar/Nav_bar";
import Tagle1 from "../components/tagle_first/Tagle1";
import Tagle2 from "../components/Tagle_second/Tagle2";
import { images } from "../constant";
import { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";




function Home() {
    const [isOn, setIsOn] = useState(true);
    const [isOn2, setIsOn2] = useState(false)





    const lamp1 = isOn2
        ? (isOn ? images.lamp1dark : images.lamp1dark1on)
        : (!isOn) ? images.lamp1light1on : images.lamp1lightouf;

    const lamp2 = isOn2
        ? (isOn ? images.lamp2dark : images.lamp2dark1on)
        : (!isOn ? images.lamp2light1on : images.lamp2lightouf);

    const lamp3 = isOn2
        ? (isOn ? images.lamp3dark : images.lamp3dark1on)
        : (!isOn ? images.lamp3light1on : images.lamp3lightouf);

    const lamp4 = isOn2
        ? (isOn ? images.lamp4dark : images.lamp4dark1on)
        : (!isOn ? images.lamp4light1on : images.lamp4lightouf);



        




return (
    <div className={isOn2 ? "bg-black text-white" : "bg-white text-black "} >
        <Nav_bar />

        <div className="flex flex-col items-center gap-y-5">
            <div className="w-135 flex justify-between items-center h-25 border-b-2  ">
                <Tagle1 isOn={isOn} setIsOn={setIsOn} isOn2={isOn2} />
                <Tagle2 isOn2={isOn2} setIsOn2={setIsOn2} />


            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-5 ">
                <div className="w-65 h-95 bg-black overflow-hidden " >
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} className="w-full h-full object-cover duration-250 " src={lamp1} alt="" />

                </div>
                <div className="w-65 h-95 bg-black overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}


                         className="w-full h-full object-cover duration-250  " src={lamp2} alt="" />
                </div>
                <div className="w-65 h-95 bg-black overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}

                         className="w-full h-full object-cover duration-250" src={lamp3} alt="" />
                </div>
                <div className="w-65 h-95 bg-black overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} className="w-full h-full object-cover duration-250" src={lamp4} alt="" />
                </div>
            </div>
        </div>
    </div>
);

}




export default Home;

