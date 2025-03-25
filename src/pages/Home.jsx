import React from 'react'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import Gallary from '../layouts/Gallary'
import Contact from '../layouts/Contact'
import ServiceLayout from '../layouts/ServiceLayout'

const Home = () => {
  return (
    <div>
        <Navber/>
        <Banner/>
        <Gallary/>
        <Contact/>
        <ServiceLayout/>

    </div>
  )
}

export default Home