
import React from 'react'
import Container  from '../components/Container'
import Heading  from '../components/Heading'
import PlanCard from '../components/PlanCard'
import Flex from '../components/Flex'

const Plan = () => {
  return (
   <section className='py-100 bg-[#F9F9FB]'>
       <Container>
        <Heading className='text-center pb-16' text="Choose The Right Plan"/>
        <Flex className='justify-between mx-3 md:mx-0 flex-wrap gap-y-6 md:gap-y-0'>
                <PlanCard />
                <PlanCard/>
                <PlanCard />
                
        </Flex>
       </Container>
   </section>
  )
}

export default Plan