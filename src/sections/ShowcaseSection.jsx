import React, { useRef } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current,project3Ref.current];

        projects.forEach((card,index) => {
            gsap.fromTo(
                card,{
                    y:50,
                    opacity:0
                },{
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100'
                    }
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        );
    },[]);

    return (
        <section ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    <div ref={project1Ref} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/eldra.png" alt="Eldra"/>
                        </div>
                        <div className="text-content">
                            <h2>Support and Supervision for Seniors Made Easy with a Smart Care App</h2>
                            <p className="text-white-50 md:text-xl">
                                An Android application built with Java, XML, and the MVVM architecture, integrated with Firebase services for authentication, cloud data, and push notifications, delivering a reliable and user-friendly healthcare experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div  ref={project2Ref} className="project">
                            <div className="image-wrapper bg-white-50">
                                <img src="/images/project2.png" alt="InternMatch"/>
                            </div>
                            <h2>Smart Internship Matcher</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-white-50">
                                <img src="/images/project3.png" alt="MedecinApp"/>
                            </div>
                            <h2>A desktop application for managing patients</h2>
                        </div>




                    </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
