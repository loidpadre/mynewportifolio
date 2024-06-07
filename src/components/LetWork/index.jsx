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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis impedit eaque, tempore cupiditate ipsum tempora doloribus molestiae temporibus laudantium explicabo hic quo nulla ea nobis sint atque at libero.</p>
           </div>
           <div className="button">
              <button>Me contratar</button>
           </div>
        </Wrapper>
    )
}