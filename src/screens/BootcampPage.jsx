import React from 'react'
import BootcampInfo from '../components/bootcampPage/BootcampInfo'
import DomainDetails from '../components/bootcampPage/DomainDetails'
import Hero from '../components/bootcampPage/Hero'
import Timeline from '../components/bootcampPage/Timeline'

function BootcampPage() {
  return (
    <>
      <Hero />
      <DomainDetails />
      <BootcampInfo />
      <Timeline />
    </>
  )
}

export default BootcampPage