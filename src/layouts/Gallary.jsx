import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'
import ImageOne from '../assets/Image 1.png'
import ImageTwo from '../assets/Image 2 (3).png'
import ImageThree from '../assets/Image 3.png'
import ImageFour from '../assets/Image 4.png'
import GallaryCard from '../components/GallaryCard'

const Gallary = () => {
  return (
    <section className='bg-[#F9F9FB] relative -z-20'>
        <Container>
            <Flex className='flex-col md:flex-row items-center md:items-start px-3 md:px-0 py-5 md:py-0 gap-y-7 justify-between relative '>
                <div className='md:relative -top-[120px] left-0 -z-10'>
                <Image src={ImageOne}/>
                </div>
                <div className='md:relative -top-[120px] left-0 -z-10'>
                <Image src={ImageTwo}/>
                </div>
                <div className='md:relative -top-[10px] right-[0px] -z-10'>
                <Image src={ImageThree}/>
                </div>
                <div className='md:relative -top-[160px] left-0 -z-10'>
                <Image src={ImageFour}/>
                </div>
              
            
            </Flex>
            <Flex className='flex-wrap justify-between pb-[100px] gap-y-5 md:gap-y-0 px-3 md:px-0'>
                <GallaryCard title="53k" text='Happy client'/>
                <GallaryCard title="10k" text='Gets Award'/>
                <GallaryCard title="120" text='Happy client'/>
                <GallaryCard title="16" text='Gets Award'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Gallary