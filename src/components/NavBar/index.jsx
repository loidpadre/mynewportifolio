import { GiAbstract005  } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
export default function NavBar(){
    useEffect(() =>{
        AOS.init()
    },[])
    const [ isOpen, setIsOpen] = useState(false)
    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <Wrapper>
            <div className="logo">
            <GiAbstract005 size={35} color="red" />
            </div>
            <div className="menu">
                <ul>
                    <a href="#header"><li>Home</li></a>
                    <a href="#project"><li>Project</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#contact"><li>Contact</li></a>   
                    <li className="redes" onClick={handleOpen}>
                        <p>Minhas redes</p> 
                        <IoMdArrowDropdown />
                    { isOpen && (
                        <ul className="menuDrop">
                        <li>LinkInd</li>
                        <li>Github</li>
                        <li>Facebook</li>
                        <li>WhatsApp</li>
                    </ul>
                    )}
                    </li>
                   
                </ul>
            </div>
        </Wrapper>
    )
}