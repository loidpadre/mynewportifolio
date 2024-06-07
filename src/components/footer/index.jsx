import { Wrapper } from "./style";
import { GiAbstract005  } from "react-icons/gi";

export default function Footer(){
    return(
        <Wrapper>
            
                <GiAbstract005 size={30} color="#ad1400" />
            {/* <div className="icons">
                <IoLogoLinkedin size={20}  />
                <FaInstagramSquare size={20}  />
                <FaWhatsappSquare size={20}  />
            </div> */}
            <div>
                <p>© 2020-2024 Loid Padre. Todos os direitos reservados.</p>
            </div>
        </Wrapper>
    )
}