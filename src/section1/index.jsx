import { useState } from "react";
import { Wrapper } from "./style";
import { DiResponsive } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";


export default function Section1(){
    const data = [
        {
            id: 0,
            title: "Otimização de Desempenho",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <AiOutlineTool size={35} color="#ff1e00" />,
            backgrounfColor: "#333131"
        },
        {
            id: 1,
            title: "Desenvolvimento Responsivo",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <MdDevices size={35} color="white" />,
            backgrounfColor: "#ad1400"
        },
        {
            id: 2,
            title: "Domínio de Frameworks Front-end",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
                    <div className="card"key={d.id} style={{backgroundColor: d.backgrounfColor}}>
                    <div>{d.icon}</div>
                    <h1>{d.title}</h1>
                    <span>{d.body}</span>
                    <p>Ler mais <IoMdArrowRoundForward/> </p>
                </div>
                   ))
                   }
                </div>
                <div className="experience">
                    <div className="years">
                        <h1>5</h1>
                        <span>Anos de experiencia</span>
                    </div>
                        <div className="palet1">
                            <div className="pal">
                                <h1>Frellancer</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </div>
                            <div className="pal">
                                <h1>Desenvolvedor na Scorpion</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </div>
                        </div>
                        <div className="palet1">
                            <div className="pal">
                                <h1>Desenvolvedor fron MAX Trainer</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </div>
                            <div className="pal">
                                <h1>Desenvolvedor web na Scorpion</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}