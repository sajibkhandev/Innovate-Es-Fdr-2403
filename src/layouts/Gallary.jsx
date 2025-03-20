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
            <Flex className='justify-between relative '>
                <div className='relative -top-[120px] left-0 -z-10'>
                <Image src={ImageOne}/>
                </div>
                <div className='relative -top-[120px] left-0 -z-10'>
                <Image src={ImageTwo}/>
                </div>
                <div className='relative -top-[10px] right-[0px] -z-10'>
                <Image src={ImageThree}/>
                </div>
                <div className='relative -top-[160px] left-0 -z-10'>
                <Image src={ImageFour}/>
                </div>
              
            
            </Flex>
            <Flex className='justify-between pb-[100px]'>
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