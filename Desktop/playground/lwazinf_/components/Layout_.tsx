import Head from "next/head";
import React, { useEffect, useState } from "react";
interface Layout_Props {
  children: JSX.Element;
}

import {
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";

export const Layout_ = ({ children }: Layout_Props) => {
  
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>LwaziNF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  {/* 👇️👇️👇️ Everything falls under this, as this is the layout file.. */} 
  {children}
    </div>
  );
};
