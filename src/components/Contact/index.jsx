import { Wrapper } from "./style";

export default function Contact(){
    return(
        <Wrapper id="contact">
            <form 
            action="https://formspree.io/f/mleqqgll"
            method="POST">
                <input type="email" name="email" required placeholder="Coloque o seu e-mail" />
                <input type="text" name="name" required placeholder="Coloque o seu nome"/>
                <textarea name="message" required id="" rows={10}></textarea>
                <button type="submit">Enviar</button>
            </form>
        </Wrapper>
    )
}