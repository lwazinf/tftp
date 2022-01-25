import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Chat from '../components/Chat'
import Products from '../components/Product'
import Grid from '../components/Grid'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

export default function Home() {
  const { selectedState, setSelectedState } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <Products />
      <Post />
      <Chat />

      <Grid />
    </main>
  )
}

