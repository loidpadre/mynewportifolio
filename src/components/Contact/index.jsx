import { Wrapper } from "./style";

export default function Contact(){
    return(
        <Wrapper id="contact">
            <form>
                <input type="email" required placeholder="Coloque o seu e-mail" />
                <input type="text" required placeholder="Coloque o seu nome"/>
                <textarea name="" id="" rows={10}></textarea>
                <button>Enviar</button>
            </form>
        </Wrapper>
    )
}