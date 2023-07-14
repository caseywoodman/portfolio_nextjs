import ProjectCard from '@/components/ProjectCard'
import React from 'react'

import { projects } from "@/database/data.json";

export const metadata = {
  title: "Casey Woodman: Projects",
  description: "Full Stack Developer",
};

const Projects = () => {
  return (
    <section className="flex flex-col justify-center">
        <h1 className='text-4xl font-bold text-center my-2'>My Projects</h1>
        <div className='flex flex-wrap gap-2 justify-center'>
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
        ))}
        </div>

    </section>
  )
}

export default Projects