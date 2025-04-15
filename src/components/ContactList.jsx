import React from 'react'
import Image from './Image'
import SubHeading from './SubHeading'
import Flex from './Flex'
import OnOff from '../assets/offon.png'

const ContactList = ({className,contacttitle}) => {
 
  
  return (
    <Flex className={` items-center  gap-x-5 md:gap-x-[37px] w-[350px] sm:w-[450px] md:w-[568px] rounded-[12px] ${className}`}>
        <Image src={OnOff}/>
        <SubHeading className='w-auto md:w-[319px] ' text={contacttitle}/>

    </Flex>
  )
}

export default ContactList