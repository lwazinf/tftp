import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Chat from '../components/Chat'
import Grid from '../components/Grid'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

export default function Home() {
  const {  } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <Chat />
      <div className={styles._container} >
        <div className={styles._filter}/>
          <div style={{ background: 'url("https://images.pexels.com/photos/5711040/pexels-photo-5711040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundPosition: 'center'}} className={styles._dp} />
          <div style={{ color: "ghostwhite", fontWeight: 'bolder', fontSize: '36px', letterSpacing: '-1px' }} className={styles._title}>
            Project Jump
            <br/>
            Rope
          </div>
          <div className={styles._subTitle} style={{ color: "lightgrey", fontSize: '16px', letterSpacing: '-0.5px' }} >
          Keketso Ngoma 
          </div>
      </div>
      <div className={styles._row}>
        <Post />
        <Grid />
      </div>
    </main>
  )
}

