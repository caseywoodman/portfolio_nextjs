import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = (project) => {
  const thisProject = project.project;
  return (
    <Link href={`/projects/${thisProject.projectId}`} className="hover:bg-secondary bg-primary rounded-lg shadow-xl">
      <div className="flex flex-1 flex-col max-w-xs p-2 ">
        <Image src={thisProject.image} alt={thisProject.altText} width={500} height={500} objectFit="contain" />
        <div className="flex flex-col py-2">
          <h2 className="text-2xl font-bold text-white text-center">{thisProject.projectName}</h2>
          <p className="text-md text-white text-center">{thisProject.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
