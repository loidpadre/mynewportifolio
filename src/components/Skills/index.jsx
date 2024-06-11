import { Wrapper } from "./style";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt , FaReact, FaNode, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Skills(){
    useEffect(() =>{
        AOS.init()
    })
    return(
        <Wrapper>
            <div className="text" data-aos="fade-up" data-aos-duration="1000">
                <h1 >Skills</h1>
                <span>Explore minhas habilidades e expertise no mundo do desenvolvimento web.</span>
            </div>
            <div className="skills" data-aos="fade-up" data-aos-duration="2000">
                <FaReact size={45} color="#ad1400" />
                <IoLogoJavascript size={45} color="#ad1400" />
                <FaHtml5 size={45} color="#ad1400" />
                <FaCss3Alt size={45} color="#ad1400" />
                <RiTailwindCssFill size={45} color="#ad1400" />
                <FaNode size={45} color="#ad1400" />
                <FaPython size={45} color="#ad1400"  />
                <SiStyledcomponents size={45} color="#ad1400"  />

            </div>
        </Wrapper>
    )
}