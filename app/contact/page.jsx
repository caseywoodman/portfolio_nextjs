import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Casey Woodman: Contact Me",
  description: "Full Stack Developer",
};

const Contact = () => {
  return (
    <section>
      <h1 className='text-4xl font-bold text-center my-4'>Contact Me</h1>
      <p className='text-lg font-semibold text-center w-8/12 m-auto'>As a new developer, I am always looking for feedback in addition to new projects. If you have any questions or you would like to have a conversation please contact me using one of the following methods.</p>

      <div className='flex flex-col gap-5 justify-center items-center mt-8'>
        <Link href="https://www.linkedin.com/in/casey-woodman-04670068/" target="_blank" className='flex gap-4 items-center bg-tertiary w-6/12 rounded-xl justify-around border-4 border-white hover:border-primary hover:border-4 hover:border-solid'>
          <Image src="/assets/LinkedIn Mark.png" width={80} height={80} alt="LinkedIn"></Image>
          <p className='font-bold text-lg'>Casey Woodman on LinkedIn</p>
        </Link>
        <Link href="https://github.com/caseywoodman" target='_blank' className='flex gap-4 items-center bg-tertiary w-6/12 rounded-xl justify-around border-4 border-white hover:border-primary hover:border-4 hover:border-solid'>
          <Image src="/assets/GitHub-Mark.png" width={80} height={80} alt="Github"></Image>
          <p className='font-bold text-lg'>Casey Woodman on Github</p>

        </Link>
        <Link href="mailto:caseytwoodman@gmail.com" target='_blank' className='flex gap-4 items-center bg-tertiary w-6/12 rounded-xl justify-around border-4 border-white hover:border-primary hover:border-4 hover:border-solid'>
          <Image src="/assets/Email Icon.png" width={80} height={80} alt="Email Me"></Image>
          <p className='font-bold text-lg'>Email Caseytwoodman@gmail.com</p>

        </Link>
        <Link href="tel:8159806246" target='_blank' className='flex gap-4 items-center bg-tertiary w-6/12 rounded-xl justify-around border-4 border-white hover:border-primary hover:border-4 hover:border-solid'>
          <Image src="/assets/phone icon.png" width={80} height={80} alt="Call Me"></Image>
          <p className='font-bold text-lg'>Call me at 815-980-6246</p>

        </Link>

      </div>
    </section>
  )
}

export default Contact