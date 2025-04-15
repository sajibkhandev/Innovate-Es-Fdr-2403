import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import ContactList from '../components/ContactList'

const Contact = () => {
  return (
    <section className='py-[100px] bg-[#FDFDFD]'>
        <Container>
            <Flex className='flex-col md:flex-row'>
                <div className='md:w-7/12 mx-3 md:mx-0'>
                <ContactList contacttitle="We solve real-world problems through people and the web." className='bg-white py-10 pl-7'/>
                <ContactList contacttitle="solve real-world problems through people and the web." className='py-3 px-7'/>
                <ContactList contacttitle="real-world problems through people and the web." className='py-3 px-7'/>
                <ContactList contacttitle="real-world problems through people and the web." className='py-3 px-7'/>
                </div>
                <div className='md:w-5/12 mx-3 md:md-0 pt-5 md:pt-0'>
                <Heading className='text-[30px] sm:text-[40px]' text='Why Choose Us'/>
                <SubHeading className='pt-[9px] pb-[41px] text-base' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.'/>
                <Button  text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact