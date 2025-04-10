import React from 'react'

const FooterList = ({text,className}) => {
  return (
    <li className={`list-none text-lg text-[#fefefee6] font-nunito font-semibold ${className}`}>{text}</li>
  )
}

export default FooterList