import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-banner bg-no-repeat bg-center bg-cover w-full '>
        <div className='bg-[#6b62c5e6] pt-[200px] pb-[100px] md:pt-[265px] md:pb-[265px] w-full h-full '>
            <Container>
                <h1 className='text-[26px] sm:text-[38px] px-2 w-auto md:px-0 md:w-[1070px] text-center mx-auto md:text-[84px] text-[#FAFAFE] font-bold font-open'>yOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
                <SubHeading className='w-auto md:w-[715px] pt-5 pb-4 text-center mx-auto text:base px-2 md:px-0 md:text-2xl text-[#E6E5F3] font-normal font-paprika' text='A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. '/>
                <div className='flex justify-center gap-x-5'>
                <Button text='get free quoto'/>
                <Link to='/blog'>
                <Button text='Learn More'/>
                </Link>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Banner