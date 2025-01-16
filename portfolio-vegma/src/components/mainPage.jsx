import React from 'react'
import HeroSection from './sections/HeroSection'
import BenefitsSection from './sections/BenefitsSection'
import MyServiceSection from './sections/MyService'
import MyOfferSection from './sections/MyOfferSection'
import CarouselSection from './sections/CarouselSection'
import Footer from './Footer'
import AboutMe from './sections/AboutMe'
import AnotherServices from './sections/AnotherServices'
import ProcessSection from './sections/ProcessSection'

export const MainPage = () => {
  return (
    <>
        <HeroSection />
        <AboutMe />
        <BenefitsSection />
        <MyServiceSection />
        <MyOfferSection />
        <ProcessSection />
        <CarouselSection />
        <AnotherServices />
        <Footer />
    </>
  )
}
