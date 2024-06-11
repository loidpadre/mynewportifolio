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
            title: "Movie App",
            web: "https://movie-six-ruby.vercel.app/",
        },
        {
            id:1,
            img: img2,
            title: "Coffee challenge",
            web: "https://cofee-challeng.vercel.app/",
        },
        {
            id:2,
            img: img6,
            title: "Rick and Morty",
            web: "https://rick-and-morty-new-site.vercel.app/",
        },
        {
            id:3,
            img: img3,
            title: "Scorpion Web Site",
            web: "https://web-scorpion.vercel.app/",
        },
        {
            id:4,
            img: img4,
            title: "Ecommerce Project",
            web: "https://beatful-shoping-cart.vercel.app/Home",
        },
        {
            id:5,
            img: img5,
            title: "Ireclene Portifolio",
            web: "https://ireclene-portifolio.vercel.app/",
        },
    ])
    const handleLink = (id) =>{
        projects.map((p) =>{
            if(p.id === id){
               window.open(p.web, "_blank")
            }
        })
    }
    return(
        <Wrapper id="project">
            <div className="text">
                <div className="col-1">
                    <h1>Feature Projects</h1>
                    <span>Explore meu universo de desenvolvimento web através dos projetos que realizei.</span>
                </div>
                <div className="col-2">
                    <a href="https://github.com/loidpadre?tab=repositories" target="_blank" ><button>Ver tudo</button></a>
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
                    <p onClick={() => handleLink(project.id)}>Ver projeto <MdOutlineArrowForward /> </p>
                </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}