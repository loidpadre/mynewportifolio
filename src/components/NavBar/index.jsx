import { GiAbstract005  } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Wrapper } from "./style";
import { useState } from "react";
export default function NavBar(){

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
                    <li>Home</li>
                    <li>Project</li>
                    <li>About</li>
                    <li>Contact</li>   
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