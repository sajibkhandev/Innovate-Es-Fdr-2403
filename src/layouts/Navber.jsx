
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import List from '../components/List'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react'

const Navber = () => {
  let [show,setShow]=useState(false)

  let handleClick=()=>{
    setShow(!show)
  }
  return (
    <>
    {/* Desktop start */}
    <nav className='hidden md:block bg-[#160c6d80] py-5 absolute top-0 left-0 w-full '>
      <Container>
       <Flex className='items-center'>
           <div className='w-2/12'>
           <Link to='/'><Image src={Logo} alt="logo image"/></Link>
           </div>
           <div className='w-8/12'>
           <ul className='flex md:gap-x-5 lg:gap-x-10 justify-center cursor-pointer	'>
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
    {/* Desktop end */}
    {/* mobile start */}

     <nav className='relative px-4 md:hidden bg-[#160c6d80] py-5'>
      <Flex className='items-center justify-between'>
        <div><Image className='w-[70%]' src={Logo}/></div>
        <div onClick={handleClick}>
          {
            show ?<RxCross2 className='text-white text-lg'/> :<FaBars className='text-white text-sm'/>
          }
        </div>
      </Flex>

      {
        show && <ul className='absolute top-[80px] left-0 w-full bg-purple-500 rounded-[10px] flex flex-col items-center justify-center gap-y-6 py-12'>
        <Link to='/'><List text="Home"/></Link>
         <Link to='/about'><List text="About"/></Link>
         <Link to='/service'><List text="Service"/></Link>
         <Link to='/portfolio'><List text="Portfolio"/></Link>
         <Link to='/price'> <List text="Price"/></Link>
         <Link to='/blog'><List text="Blog"/></Link>
   </ul>
      }
      
     </nav>
    {/* mobile end */}
    </>
  )
}

export default Navber