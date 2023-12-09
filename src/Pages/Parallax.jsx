import React from 'react'
import './Parallax.css'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

import Pic1 from '../assets/slidepic/img_1.jpg'
import Pic2 from '../assets/slidepic/img_2.jpg'
import Pic3 from '../assets/slidepic/img_3.jpg'
import Pic4 from '../assets/slidepic/img_4.jpg'

function Parallax() {
    const ref = useRef(null);

    const options = {
      smooth: true,
    } 
  return (
    <>
    <LocomotiveScrollProvider options={options} containerRef={ref}>
    <main data-scroll-container ref={ref}>
    <section className='intro'
      data-scroll-speed="2"
      data-scroll-section>
        <div className='d-flex w-100 justify-content-center'><img src={Pic1} className='w-25' alt="" srcset="" /></div>
        <div className=''>
        <h2 className='intro__title' data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">Parallax
      </h2>
        </div>
    </section>
    <section className="contents" data-scroll-section>

        </section>
    </main>
    </LocomotiveScrollProvider>
    </>
  )
}

export default Parallax