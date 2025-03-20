import React from 'react'
import Image from './Image'


const ServiceCard = ({image,title,text}) => {
  return (
    <div className='group/one w-[370px] py-12 bg-white hover:bg-[#6B62C5] flex flex-col items-center justify-center rounded-[20px] shadow-xl duration-500'>

        <Image src={image}/>
        <h4 className='pt-8 text-[30px] group-hover/one:text-white text-[#141135] font-open font-bold duration-300'>{title} </h4>
        <p className='w-[278px] text-center text-lg group-hover/one:text-[#E6E5F3] text-[#726E9E] font-normal font-paprika pb-3 duration-300'>{text}</p>
        <h6 className='group/two relative  text-lg group-hover/one:text-white text-[#141135] font-bold font-open '>Read more <span className='group-hover/two:w-[120px] w-[25px] h-[40px] group-hover/one:bg-[#ffffff80] bg-[#1bbf0080] absolute -top-[6px] -right-[12px] group-hover/two:rounded-l-[100px] rounded-r-[100px] duration-300'></span></h6>

    </div>
  )
}

export default ServiceCard