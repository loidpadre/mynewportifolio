import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { MdOutlineArrowForward } from "react-icons/md";
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Project(){
    useEffect(() =>{
        AOS.init()
    })
    const [projects, setProjects] = useState([
        {
            id:0,
            img: img1,
            title: "Movie App"
        },
        {
            id:1,
            img: img2,
            title: "Coffee challenge"
        },
        {
            id:2,
            img: img6,
            title: "Rick and Morty"
        },
        {
            id:3,
            img: img3,
            title: "Scorpion Web Site"
        },
        {
            id:4,
            img: img4,
            title: "Ecommerce Project"
        },
        {
            id:5,
            img: img5,
            title: "Ireclene Portifolio"
        },
    ])
    return(
        <Wrapper id="project">
            <div className="text">
                <div className="col-1">
                    <h1>Feature Projects</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="col-2">
                    <button>Ver tudo</button>
                </div>
            </div>
            <div className="project">
                {
                    projects.map((project) =>(
                        <div data-aos="flip-up" data-aos-duration="2000">
                            <div className="proj" key={project.id}>
                    <img src={project.img} alt="" />
                </div>
                <div className="sub">
                    <h1>{project.title}</h1>
                    <p>Saber mais <MdOutlineArrowForward /> </p>
                </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}