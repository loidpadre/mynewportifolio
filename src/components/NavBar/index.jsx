import { GiAbstract005  } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
export default function NavBar(){
    useEffect(() =>{
        AOS.init()
    },[])
    const [ isOpen, setIsOpen] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }

    const handleMenu = () =>{
        setIsOpenMenu(!isOpenMenu)
    }
    return(
        <Wrapper>
            <div className="logo">
            <a href="#header"><GiAbstract005 size={35} color="red" /></a>
            
            </div>
            <div className={isOpenMenu?"menu":"menu hidden"}>
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
                        <a href="https://www.linkedin.com/in/loidpadre/" target="_blank"><li>LinkInd</li></a>
                        <a href="https://github.com/loidpadre" target="_blank"><li>Github</li></a>
                        <a href="https://www.instagram.com/loidpadre_oficial/" target="_blank"><li>Instagram</li></a>
                        <a href="https://wa.me/5585996537401" target="_blank"><li>WhatsApp</li></a>
                    </ul>
                    )}
                    </li>
                   
                </ul>
            </div>
            <div className="amburg" onClick={handleMenu}>
                <CiMenuFries size={30}/>
            </div>
        </Wrapper>
    )
}