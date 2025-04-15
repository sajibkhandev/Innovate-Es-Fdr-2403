import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import Flex from '../components/Flex'
import IconOne from '../assets/serviceIcon1.png'
import IconTwo from '../assets/serviceIcon2.png'

const ServiceLayout = () => {
  return (
    
    <section className='py-[100px] bg-five'>
        <Container>
            <Flex className='gap-[30px] flex-wrap px-3 md:px-0'>
            <div className='w-[370px] '>
                <Heading className='text-[30px] md:text-[50px]' text='What We Do'/>
                <p className='w-auto md:w-[350px] pt-5 pb-[56px] text-[#6C7D93] text-lg font-open font-normal'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                <Button text='Contact Us'/>

            </div>
            <ServiceCard image={IconOne} title='Software Dev ' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
            <ServiceCard image={IconTwo} title='Content Writing' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
            <ServiceCard image={IconOne} title='Digital Marketing' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
            <ServiceCard image={IconTwo} title='Support & Training' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
            <ServiceCard image={IconOne} title='Software Dev ' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
            
          
            </Flex>
            
        </Container>
    </section>
  )
}

export default ServiceLayout