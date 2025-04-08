import React from 'react'
import Image from '../components/Image'
import IconOne from '../assets/planIcone.png'
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";


const PlanCard = ({}) => {
  return (
    <div className='group w-[370px]  bg-white rounded-[20px] shadow-xl hover:bg-[#6B62C5] duration-500'>
        <h4 className='group-hover:text-white text-3xl text-third font-opne font-bold text-center pt-[60px] pb-4 duration-500'>Basic</h4>
        <div className='group-hover:bg-[#E6E5F3] duration-500 w-[370px] h-[170px] bg-[#ECEDF0] relative'>
            <div className='w-[58px] h-[58px] rounded-full  absolute top-[30px] left-[60px]'>
            <BsEmojiSmileUpsideDownFill  className='text-[60px] text-yellow-500'/>

            </div>
            <div className='w-[58px] h-[58px] rounded-full  absolute top-[34px] left-[105px]'>
            <FaCommentDots className='text-[60px] text-blue-500'/>
            </div>
            <div className='w-[58px] h-[58px] rounded-full bg-yellow-500 absolute top-[40px] left-[150px]'>
            <BsEmojiSmileUpsideDownFill  className='text-[60px] text-yellow-500'/>
            </div>
            <div className='w-[58px] h-[58px] rounded-full  absolute top-[50px] left-[200px]'>
            <FaCommentDots className='text-[60px] text-blue-500'/>
            </div>




        </div>
        <h4 className='relative text-5xl text-secondary font-nunito font-extrabold text-center pt-5 pb-3'><span className='text-2xl font-meduim absolute top-[22px] left-[130px]'>$</span>160</h4>
        <p className='group-hover:text-white duration-500 w-[252px] text-center mx-auto pb-[59px] text-lg text-[#726E9E] font-normal font-paprika'> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>

    </div>
  )
}

export default PlanCard