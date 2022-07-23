import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { TwitterShareButton } from "react-share";
import { useRecoilState } from "recoil";
import { commentState } from "./atoms/atoms";
import CommentObj_ from "./elements/01_/CommentObj_";
import ControlsObj_ from "./elements/01_/ControlsObj_";

interface DC01_Props {}

const DC01_ = ({}: DC01_Props) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [comments_, setComments_] = useRecoilState(commentState);
  const [images_, setImages_] = useState<any>();
  const start = new Date();
  const start_ = {
    month: month[start.getMonth()],
    day: start.getDay(),
    year: start.getFullYear(),
  };
  const inputFile = useRef(null);

  const onSelectFile = (e: { target: { files: any } }) => {
    const selectedFile = e.target.files;
    setImages_(selectedFile[0]);
  };

  return (
    <div
      className={`h-[50px] w-[800px] flex flex-col items-center justify-center relative`}
    >
      <div
        className={`w-[550px] h-[200px] rounded-lg shade bg-white flex flex-row relative justify-start items-center p-1`}
      >
        <div
          className={`w-full h-full absolute top-0 right-0 flex flex-col justify-center items-center overflow-hidden pointer-events-none`}
        >
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`w-[150px] relative left-[150px] top-[50px] opacity-10 pointer-events-none`}
          />
        </div>
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={onSelectFile}
          accept="image/png, image/jpeg, image/webp"
          style={{ display: "none" }}
        />
        <div
          className={`w-[250px] h-[170px] rounded-lg overflow-hidden cursor-pointer`}
          onClick={() => {
            // @ts-ignore
            inputFile.current.click();
          }}
        >
          <img
            src={`${
              images_
                ? URL.createObjectURL(images_)
                : "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }`}
            className={`w-full h-full object-cover opacity-100 hover:opacity-80 transition-all duration-500`}
          />
        </div>
        <div
          className={`w-[300px] h-full flex flex-col justify-center items-center overflow-hidden pl-5`}
        >
          <div
            className={`w-[300px] h-[120px] flex flex-col justify-center items-center`}
          >
            <div
              className={`w-[285px] h-[45px] flex flex-row relative overflow-hidden`}
            >
              <textarea
                className={`text-[14px] text-black/80 w-[95%] font-medium`}
                rows={2}
                spellCheck={false}
                placeholder={`What style of shoe are you into? A favorite colour maybe?!`}
                onChange={(e) => {}}
              ></textarea>
            </div>
            <div
              className={`w-[280px] h-[75px] flex flex-row relative overflow-hidden`}
            >
              <textarea
                rows={5}
                spellCheck={false}
                className={`text-[12px] text-black/50 font-light w-[280px] min-h-[70px] bg-transparent relative top-0`}
                placeholder={`Non cupidatat tempor reprehenderit cillum consectetur ullamco et cupidatat sunt sit ullamco. Aute nostrud ex exercitation do et qui cupidatat qui consectetur proident pariatur.`}
                onChange={(e) => {}}
              ></textarea>
            </div>
          </div>
          <div
            className={`w-[290px] h-[50px] rounded-md flex flex-row justify-start items-center`}
          >
            <div
              className={`w-[40px] h-[40px] bg-black/50 shadow-sm rounded-[50%] overflow-hidden cursor-pointer`}
            >
              <img
                src={`https://avatars.githubusercontent.com/u/42185877?v=4`}
                className={`w-full object-cover`}
              />
            </div>
            <div
              className={`w-[210px] h-[40px] pl-3 flex flex-col justify-center items-start`}
            >
              <p
                className={`text-[12px] text-black/80 font-medium cursor-pointer`}
              >
                Lwazi Ndlovu
              </p>
              <p className={`text-[10px] text-black/50 font-normal`}>
                {start_["month"]} {start_["day"]}, {start_["year"]}
              </p>
            </div>
            <div
              className={`w-[20px] relative right-[50px] top-[5px] opacity-70`}
            >
              <TwitterShareButton
                title={
                  "Send @LwaziNF a DM with your ideas.. Build your brand site online today!"
                }
                url={"http://lwazinf.com"}
                hashtags={[]}
              >
                <FontAwesomeIcon
                  icon={faShare}
                  className={`h-[14px] w-[14px] text-gray-500/50 relative right-[-50px] bottom-[0px] transition-all duration-500 hover:text-gray-500 cursor-pointer`}
                  onClick={() => {}}
                />
              </TwitterShareButton>
              <div className={`hidden absolute top-0`} id="twitterButton">
                {/* <TwitterShareButton
                  onLoad={() => {}}
                  options={{
                    buttonHashtag: undefined,
                    screenName: undefined,
                    size: "small",
                    text: "Testing",
                    via: "LwaziNF",
                  }}
                  placeholder={
                    <div>
                      <FontAwesomeIcon
                    icon={faShare}
                    className={`h-[14px] w-[14px] text-gray-500/50 transition-all duration-500 hover:text-gray-500 my-1 relative right-[-1.5px] bottom-[-4px] cursor-pointer`}
                    onClick={() => {}}
                  />
                    </div>
                  }
                  url="https://lwazinf.com"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ControlsObj_ />

      <div
        className={`${
          comments_ ? "min-h-1" : "h-0"
        } w-[550px] absolute top-[135px] left-[198px] transition-all duration-500`}
      >
        <div
          className={`${
            comments_ ? "min-h-1" : "h-0 overflow-hidden"
          } w-full transition-all duration-500 relative top-0 left-0`}
        >
          <CommentObj_ />
        </div>
      </div>
    </div>
  );
};

export default DC01_;
