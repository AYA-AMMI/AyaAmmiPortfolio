import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {projects} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Projects = () => {
    return (
        <section id="projects" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="My Projects"
                sub="Things I've Built"/>
                <div className="lg:columns-3 md:columns:2 columns-1 mt-16">
                    {projects.map(({ imgPath,name,mentions,review })=>(
                        <GlowCard card={{review}}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={imgPath} alt={name}/>
                                </div>
                                <div>
                                    <p className="font-bold text-copic-100">{name}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
