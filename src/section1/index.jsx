import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { DiResponsive } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Section1(){
    useEffect(() =>{
        AOS.init()
    })
    const data = [
        {
            id: 0,
            title: "Otimização de Desempenho",
            body:"Busco garantir uma experiência mais suave e responsiva para os usuários finais. Minhas contribuições visam aprimorar o desempenho dos projetos e agregar valor às equipes de desenvolvimento.",
            icon: <AiOutlineTool size={35} color="#ff1e00" />,
            backgrounfColor: "#333131"
        },
        {
            id: 1,
            title: "Desenvolvimento Responsivo",
            body:"Tenho conhecimentos em Desenvolvimento Responsivo, uma abordagem essencial para garantir que os sites e aplicativos que desenvolvo sejam visualmente atrativos e funcionais em uma variedade de dispositivos e tamanhos de tela.",
            icon: <MdDevices size={35} color="white" />,
            backgrounfColor: "#ad1400"
        },
        {
            id: 2,
            title: "Domínio de Tecnologias Front-end",
            body:"Tenho habilidades sólidas no domínio de Tecnologias Front-end, o que me permite criar interfaces web interativas e visualmente atraentes. Com proficiência em HTML, CSS e JavaScript, sou capaz de traduzir designs em experiências de usuário funcionais e responsivas.",
            icon: <FaCode size={35} color="#ff1e00" />,
            backgrounfColor: "#272727"
        },
    ]
    return(
        <Wrapper>
            <div className="squar">

            </div>
            <div className="cards-inf">
                <div className="cards">
                   {
                   data.map((d) =>(
                    <div className="card"key={d.id} style={{backgroundColor: d.backgrounfColor}} data-aos="fade-up" data-aos-duration="2000">
                    <div>{d.icon}</div>
                    <h1>{d.title}</h1>
                    <span>{d.body}</span>
                    <a href="https://www.linkedin.com/in/loidpadre/" target="_blank" rel="noopener noreferrer"><p>Ler mais <IoMdArrowRoundForward/> </p></a>
                </div>
                   ))
                   }
                </div>
                <div className="experience">
                    <div className="years" data-aos="fade-right" data-aos-duration="2000">
                        <h1>5</h1>
                        <span>Anos de experiencia</span>
                    </div>
                        <div className="palet1" >
                            <div className="pal" data-aos="fade-left" data-aos-duration="2000">
                                <h1>Frellancer</h1>
                                <span>Adquiri uma vasta experiência colaborando em uma variedade de projetos desafiadores.</span>
                            </div>
                            <div className="pal" data-aos="fade-left" data-aos-duration="2000">
                                <h1>Desenvolvedor na Scorpion</h1>
                                <span>Trabalhei como Programador numa pequena startup onde criamos soluções para a Comunidade estudantil da mminha cidade.</span>
                            </div>
                        </div>
                        <div className="palet1">
                            <div className="pal" data-aos="fade-left" data-aos-duration="2000">
                                <h1>Desenvolvedor front end MAX Trainer</h1>
                                <span>contribuí para o desenvolvimento de soluções digitais para uma das academias da minha cidade.</span>
                            </div>
                            <div className="pal" data-aos="fade-left" data-aos-duration="2000">
                                <h1>Desenvolvedor web (Projectos Pessoais)</h1>
                                <span>Desenvolviprojectos pessoas que dão solução aos meus pequenos problemas diarios.</span>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}