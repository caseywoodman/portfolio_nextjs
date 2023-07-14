"use client"

import { useParams } from 'next/navigation'
import { projects } from "@/database/data.json";
import Image from 'next/image';
import Link from 'next/link';




const CurrentProject = () => {
    const { id } = useParams()
  return (
    <section className="mt-2 flex">
    {projects.map((project) => (  
        <>
        {
        project.projectId === id ?
        <div key={project.projectId} className="flex flex-col w-full items-center">
            <div className="flex gap-2 mb-4">
                <Link href={project.githubLink} target="_blank">
                    <button className="px-4 py-2 bg-primary hover:bg-secondary text-white font-bold text-xl rounded-xl">GitHub</button>
                </Link>

                {project.liveLink ?
                <Link href={project.liveLink} target="_blank">
                    <button className="px-4 py-2 bg-primary hover:bg-secondary text-white font-bold text-xl rounded-xl">Deployed Site</button>
                </Link>
                : null
                }
            </div>   
        <Image src={project.image} alt={project.projectName} width={500} height={500} className="border-solid border-4 rounded-xl border-primary" />
        <div className=" p-4 items-center flex flex-col w-full">
            <p className="font-bold text-4xl py-4">{project.projectName}</p>
            <p className="text-center text-lg">{project.description}</p>
            <h2 className="font-bold text-2xl py-4">Technologies Used</h2>
            <ul className="flex gap-2 flex-wrap justify-center">
                {project.technologies.map((tech) => (
                    <li key={tech} className="text-primary bg-tertiary text-center font-bold text-sm py-2 px-4">{tech}</li>
                ))}
            </ul>
        </div>
        <Link href="/projects">
        <button className="px-4 py-2 my-12 bg-black hover:bg-secondary text-white font-bold text-xl rounded-xl"> BACK TO PROJECTS</button>
        </Link>
        </div>
        : null
        }
        </>
    ))}
    </section>
    )
}

export default CurrentProject