import React, { Component } from "react";
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Features from '../comps/Features.js'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';



export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
   <>

      <div className={styles.slider}>

        <AutoplaySlider play={true} cancelOnInteraction={false} interval={8000} buttons={false} bullets={false} showTimer={false}>

          <div data-src="/Spin.jpg" />
          <div data-src="/Paint.jpg" />
          <div data-src="/Quads.png" />
          <div data-src="/Rides.jpg" />

        </AutoplaySlider>

        <div className={styles.brands}></div>
        
        <div className={styles.logo}>
          <Image src={"/logo.png"} width={250} height={250} alt={"logo"} />
        </div>
      
      </div>

      <Features />
    </>
  )
}
