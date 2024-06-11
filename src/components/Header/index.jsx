import { useEffect } from "react"
import IMG from "../../assets/bg.png"
import { Wrapper } from "./style"
import AOS from "aos"
import "aos/dist/aos.css"
export default function Header(){
    useEffect(() =>{
        AOS.init()
    },[])
    return(
        <Wrapper id="header">
            <div className="col-1" data-aos="fade-right" data-aos-duration="2000">
                <img src={IMG} alt="Bg" />
            </div>
            <div className="col-2">
                <span data-aos="fade-up" data-aos-duration="2000">Ola, Eu sou Loid Padre</span>
                <h1 data-aos="fade-up" data-aos-duration="1000">Software Engineer/Front End Developer</h1>
                <p data-aos="fade-up" data-aos-duration="2000">Um desenvolvedor web apaixonado, Com um forte interesse em tecnologia e desenvolvimento web, dedico-me a criar soluções digitais que não apenas atendem às necessidades dos usuários, mas também proporcionam uma experiência envolvente e intuitiva.</p>
                <a href="https://www.linkedin.com/in/loidpadre/" target="_blank"><button data-aos="fade-up" data-aos-duration="2000">Sobre mim</button></a>
            </div>
        </Wrapper>
    )
}