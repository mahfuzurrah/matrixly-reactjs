import React from 'react'
import { HeroBanner } from '../components/banner/HeroBanner'
import { CardHoverEffect } from "../components/CardHoverEffect";
import { ScrollCard } from "../components/ScrollCard";
import { TextRevealCardPreview } from "../components/TextRevealCardTitle";

function Home() {
  return (
    <>
    <HeroBanner />
    <section className=" w-[100%] h-[100%] py-[80px]">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
        Stay ahead on gaining and sharing information using following Matrixly tools:
        </h2>
        <ScrollCard />
      </div> 
    </section>
    <section className=" w-[100%] h-[100%] py-[80px]">
      <div className="container">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Empower Your Documents and Insights: All-in-One Platform for
            Efficiency and Impact
          </h2>
        </div>
        <CardHoverEffect />
      </div>
    </section>
    <section className=" w-[100%] h-[100%] py-[80px] pt-0">
      <div className="container">
        <div className="bg-[#1d1c20] p-10 rounded-lg">
          <TextRevealCardPreview/>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home