import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-blog-black text-blog-font py-24 px-12 text-xl leading-9">
        <div className='mx-auto my-0 md:flex items-start md:px-6 max-w-6xl '>
          <div className='w-full md:w-2/3'>
            <h1 className='text-4xl mb-6'>Advanced patterns for Frontend developers</h1>
            <p className='mr-40 mb-4'>Improve your technical skills with in-depth explanations, practical advices and useful tips and tricks.</p>
            <p className='mb-20 text-[#979ebf] italic text-base'>Techstack: React, Typescript, node, monorepos, yarn, webpack, etc.</p>
          </div>
          <div className='w-full md:w-1/3 text-right'>
            <Image className='inline-block rounded-[50%]' width={64} height={64} src='https://img.duoziwang.com/2016/11/29/220134634.jpg' alt='Avatar' />
            <h2 className='my-6 text-2xl leading-6'>G&apos;day, I&apos;m 007</h2>
            <p className='text-sm text-[#ccd0e0] font-400'>Frontend Architect, coder</p>
            <p className='text-sm text-[#ccd0e0] font-400 mb-6'>Working on Bytedance</p>
            <p>
              <Image className='inline-block mx-[2px] cursor-pointer' alt='twitter' src={'./twitter.svg'} width={32} height={32} />
              <Image className='inline-block mx-[2px] cursor-pointer' alt='twitter' src={'./youtube.svg'} width={32} height={32} />
              {/* <Image className='inline-block' alt='twitter' src={'./twitter.svg'} width={32} height={32} />
              <Image className='inline-block' alt='twitter' src={'./twitter.svg'} width={32} height={32} /> */}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
