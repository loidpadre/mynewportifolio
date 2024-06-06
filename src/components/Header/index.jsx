import IMG from "../../assets/bg.png"
import { Wrapper } from "./style"
export default function Header(){
    return(
        <Wrapper>
            <div className="col-1">
                <img src={IMG} alt="Bg" />
            </div>
            <div className="col-2">
                <span>Ola, Eu sou Loid Padre</span>
                <h1>Software Engineer/Front End</h1>
                <p>Um desenvolvedor web apaixonado, Com um forte interesse em tecnologia e desenvolvimento web, dedico-me a criar soluções digitais que não apenas atendem às necessidades dos usuários, mas também proporcionam uma experiência envolvente e intuitiva.</p>
                <button>Sobre mim</button>
            </div>
        </Wrapper>
    )
}