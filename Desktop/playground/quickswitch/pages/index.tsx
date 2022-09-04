import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const Home: NextPage = () => {
  const [imageUrl_, setImageUrl_] = useState("");
  const setQR = async () => {
    const imageUrl = await QRCode.toDataURL("https://quickpay.com/lwazinf");
    setImageUrl_(imageUrl);
  };
  useEffect(() => {
    setQR();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center lg:w-[1200px] md:w-[600px] min-h-screen relative">
      <img
        src={imageUrl_}
        className={`w-[300px] h-[300px] rounded-[6px]`}
      />

      <div className={`w-[250px] h-[1px] border-b-[2px] border-black/30 border-dashed m-6`} />

      <div className={`flex flex-row w-[300px] mt-[0px]`}>
      <div className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white rounded-4 mx-[5px] flex flex-col justify-center items-center`}>
        Transactions
      </div>
      <div className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white rounded-4 mx-[5px] flex flex-col justify-center items-center`}>
        Scan
      </div>
    </div>

    <div className={`w-[250px] h-[1px] border-b-[2px] border-black/30 border-dashed m-6`} />
    </div>
  );
};

export default Home;
