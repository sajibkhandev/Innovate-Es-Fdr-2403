import React from 'react'
import Image from './Image'
import SubHeading from './SubHeading'
import Flex from './Flex'
import OnOff from '../assets/offon.png'

const ContactList = ({className,contacttitle}) => {
 
  
  return (
    <Flex className={`items-center gap-x-[37px] w-[568px] rounded-[12px] ${className}`}>
        <Image src={OnOff}/>
        <SubHeading className='w-[319px]' text={contacttitle}/>

    </Flex>
  )
}

export default ContactList