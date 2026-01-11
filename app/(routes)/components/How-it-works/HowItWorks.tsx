import React from 'react'
import Header from '../Header'
import Container from './Container'

const HowItWorks = () => {
  return (
    <div id='how-it-works' className='py-20 px-5 vsm:px-8 md:px-12  overflow-x-hidden w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
        <Header
            preHeadline='SIMPLE PROCESS'
            subHeading='No design skills. No coding. Just describe your business and let AI do the rest.'
            mainHeading='From Idea to Launch in Minutes'
        />
        <Container />
    </div>
  )
}

export default HowItWorks