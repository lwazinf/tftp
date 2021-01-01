import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

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

      </div>
      <div className={styles.brands}></div>
      <div className={styles.logo}>
        <Image src={"/logo.png"} width={250} height={250} alt={"logo"} />
      </div>

    {/* FEATURES */}

    <div className={styles.features}> 

    {/* HEALTHCARE FEATURE */}

    <div className={styles.contentColumn}>
      
      <div className={styles.contentCopy}>
        <p1 className={styles.p2bold}>HEALTHCARE</p1>
        <p3 className={styles.p3}>Enjoy our park knowing a full time facility, for injuries and urgent medical situations, is available.</p3>
      </div>
      
      <div className={styles.circles}>
        <ReactRoundedImage
          image={"/circle_images/ambulance.jpg"}
          imageWidth="150"
          imageHeight="150"
          roundedColor="#111111"
          roundedSize="4"
        />
      </div>  

    </div>

    {/* HEALTHCARE FEATURE END */}

    {/* PARKING FEATURE */}

    <div className={styles.contentColumn}>
      
      <div className={styles.contentCopy}>
        <p1 className={styles.p2bold}>SAFE PARKING</p1>
        <p3 className={styles.p3}>We have safe and secure facilities, but always be aware of your surrounding and keep safe.</p3>
      </div>
      
      <div className={styles.circles}>
        <ReactRoundedImage
          image={"/circle_images/parking.jpg"}
          imageWidth="150"
          imageHeight="150"
          roundedColor="#111111"
          roundedSize="4"
        />
      </div>  

    </div>

    {/* PARKING FEATURE END */}

    {/* SUPPORT FEATURE */}

    <div className={styles.contentColumn}>
      
      <div className={styles.contentCopy}>
        <p1 className={styles.p2bold}>SUPPORT</p1>
        <p3 className={styles.p3}>We are available to answer all your questions and even when you arrive at the park.</p3>
      </div>
      
      <div className={styles.circles}>
        <ReactRoundedImage
          image={"/circle_images/call.jpg"}
          imageWidth="150"
          imageHeight="150"
          roundedColor="#111111"
          roundedSize="4"
        />
      </div>  

    </div>

    {/* SUPPORT FEATURE END */}

    {/* AFFORDABLE FEATURE */}

    <div className={styles.contentColumn}>
      
      <div className={styles.contentCopy}>
        <p1 className={styles.p2bold}>AFFORDABLE</p1>
        <p3 className={styles.p3}>Our activities are affordable to make them available to the whole family.</p3>
      </div>
      
      <div className={styles.circles}>
        <ReactRoundedImage
          image={"/circle_images/pig.jpg"}
          imageWidth="150"
          imageHeight="150"
          roundedColor="#111111"
          roundedSize="4"
        />
      </div>  

    </div>

    {/* AFFORDABLE FEATURE END */}

    </div>

    {/* FEATURES END */}

   </>
  )
}
