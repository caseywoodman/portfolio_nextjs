import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex md:flex-row flex-col m-auto gap-4">
      <section className='w-full flex border-solid border-4 border-primary m-auto h-full rounded-2xl'>
        {/* Headshot */}
        <Image src="/assets/Woodman Headshot.jpg" width={500} height={1000} alt='Headshot' className='rounded-2xl'></Image>
      </section>
      <section className='w-full m-auto h-full'>
        {/* About Me */}
        <h1 className='text-4xl font-bold text-center my-4'>About Me</h1>
        <p className='text-xl break-words max-w-full text-center'>I am a full stack web developer with a passion for creating and learning. I recently completed the Northwestern University Coding Bootcamp and I am excited to bring my creativity and problem solving skills to the world of web development. I am a two time graduate of the Western Illinois University. I have been working in sports for the past 8 years in a variety of roles including most recently overseeing the Broadcast Operations Department at Northwestern University. With the experience and the Bootcamp that I have completed I am ready to make the change into a different industry doing something that I love to do.</p>
        <h2 className='text-2xl font-bold text-center my-4'>Coding Expertise</h2>
        <div className='flex justify-around'>
          <ul className='text-center text-xl w-full'>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">HTML</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">CSS</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">JavaScript</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Node.js</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Express.js</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">React.js</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">MySQL</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">MongoDB</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">GraphQL</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Apollo</li>

          </ul>
          <ul className='text-center text-xl w-full gap-2'>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1" >NextJS</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">React</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">jQuery</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Bootstrap</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">TailwindCSS</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Handlebars</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">GitHub</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Heroku</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">Vercel</li>
            <li className="w-3/4 bg-tertiary text-center my-2 mx-auto py-1">GitHub</li>

          </ul>
        </div>
        <p className='text-xl break-words max-w-full'></p>
      </section>
    </div>
  )
}

export default About