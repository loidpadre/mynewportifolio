import { Wrapper } from "./style";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function LetWork(){
    useEffect(() =>{
        AOS.init()
    })
    return(
        <Wrapper data-aos="fade-up" data-aos-duration="2000">
           <div className="text">
            <h1>Vamos trabalhar juntos no teu novo project?</h1>
            <p>Vamos unir forças e dar vida ao seu próximo projeto! Com minha expertise em desenvolvimento web e sua visão única, podemos criar algo verdadeiramente excepcional.</p>
           </div>
           <div className="button">
              <a href="http://wa.me/5585996537401" target="_blank"><button>Me contratar</button></a>
           </div>
        </Wrapper>
    )
}