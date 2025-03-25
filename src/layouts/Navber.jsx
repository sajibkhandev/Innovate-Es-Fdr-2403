
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import List from '../components/List'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className='bg-[#160c6d80] py-5 absolute top-0 left-0 w-full '>
      <Container>
       <Flex className='items-center'>
           <div className='w-2/12'>
           <Link to='/'><Image src={Logo} alt="logo image"/></Link>
           </div>
           <div className='w-8/12'>
           <ul className='flex gap-x-10 justify-center cursor-pointer	'>


            <Link to='/'><List text="Home"/></Link>
            <Link to='/about'><List text="About"/></Link>
            <Link to='/service'><List text="Service"/></Link>
            <Link to='/portfolio'><List text="Portfolio"/></Link>
            <Link to='/price'> <List text="Price"/></Link>
            <Link to='/blog'><List text="Blog"/></Link>
            
           </ul>
           





           
           </div>
           <div className='w-2/12 text-right'>
             <Button text="Contact Us"/>
           </div>
       </Flex>

      </Container>
    </nav>
  )
}

export default Navber