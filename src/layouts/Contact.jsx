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
            <Flex>
                <div className='w-7/12'>
                <ContactList contacttitle="We solve real-world problems through people and the web." className='bg-white py-10 pl-7'/>
                <ContactList contacttitle="solve real-world problems through people and the web." className='py-3 px-7'/>
                <ContactList contacttitle="real-world problems through people and the web." className='py-3 px-7'/>
                <ContactList contacttitle="real-world problems through people and the web." className='py-3 px-7'/>
                </div>
                <div className='w-5/12'>
                <Heading text='Why Choose Us'/>
                <SubHeading className='pt-[9px] pb-[41px]' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.'/>
                <Button  text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact