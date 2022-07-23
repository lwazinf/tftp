import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../../atoms/atoms";

interface ControlsObj_Props {}

const ControlsObj_ = ({}: ControlsObj_Props) => {
  const [heart_, setHeart_] = useState(false);
  const [cart_, setCart_] = useState(true);
  const [comment_, setComment_] = useRecoilState(commentState);
  return (
    <div
      className={`w-[90px] h-[30px] mt-3 ml-[300px] z-20 rounded-[4px] shadow-md bg-black/60 flex flex-row justify-center items-center relative`}
    >
      <FontAwesomeIcon
        icon={faComment}
        className={`transition-all duration-500 h-[14px] w-[14px] ${
          comment_
            ? "text-white hover:text-white/50"
            : "text-white/50 hover:text-white"
        } m-2 mr-1 relative right-[0px] bottom-[1px] cursor-pointer`}
        onClick={() => {
          setComment_(!comment_);
        }}
      />
      <FontAwesomeIcon
        icon={faHeart}
        className={`transition-all duration-500 h-[13px] w-[13px] ${
          heart_
            ? "text-red-400 hover:text-red-400/60"
            : "text-red-400/60 hover:text-red-400"
        } m-2 mr-1 relative right-[-1.5px] bottom-[1px] cursor-pointer`}
        onClick={() => {
          setHeart_(!heart_);
        }}
      />
      <FontAwesomeIcon
        icon={faCartShopping}
        className={`transition-all duration-500 h-[13px] w-[13px] ${
          cart_
            ? "text-green-300 hover:text-green-300/60"
            : "text-green-300/60 hover:text-green-300"
        } m-2 relative right-[-1.5px] bottom-[1px] cursor-pointer`}
        onClick={() => {
          setCart_(!cart_);
        }}
      />
      <a
        href={`https://twitter.com/lwazinf`}
        target={`_blank`}
        className={`h-[16px] w-[16px] m-2 absolute right-[-35px]`}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className={`hover:text-[#1DA1F2] transition-all duration-500 h-[16px] w-[16px] text-black/60 cursor-pointer`}
          onClick={() => {}}
        />
      </a>
      <div
        className={`w-[300px] h-[150px] transition-all duration-500 absolute rounded-[3px] shadow-lg bg-black/50 hover:bg-black/60 ${
          cart_
            ? "pointer-events-auto opacity-100 top-[38px] left-[70px]"
            : "pointer-events-none opacity-0 top-[38px] left-[50px]"
        }`}
      >
        <div className={`w-[60px] h-[20px] rounded-[2px] absolute bottom-2 right-2 flex justify-center items-center bg-white transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer`}>
          <p className={`mx-auto text-[11px] font-normal text-black/80`}>
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlsObj_;
