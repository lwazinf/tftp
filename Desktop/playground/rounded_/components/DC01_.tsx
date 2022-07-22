import { TwitterShareButton } from "react-twitter-embed";
import { useRecoilState } from "recoil";
import { commentState } from "./atoms/atoms";
import CommentObj_ from "./elements/01_/CommentObj_";
import ControlsObj_ from "./elements/01_/ControlsObj_";

interface DC01_Props {}

const DC01_ = ({}: DC01_Props) => {
  const [comments_, setComments_] = useRecoilState(commentState);
  return (
    <div
      className={`h-[50px] w-[800px] flex flex-col items-center justify-center relative`}
    >
      <div
        className={`w-[550px] h-[200px] rounded-lg shade bg-white flex flex-row relative justify-start items-center p-1`}
      >
        <div
          className={`w-full h-full absolute top-0 right-0 flex flex-col justify-center items-center overflow-hidden`}
        >
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`w-[150px] relative left-[150px] top-[50px] opacity-10`}
          />
        </div>
        <div
          className={`w-[250px] h-full bg-gray-500 rounded-lg overflow-hidden cursor-pointer`}
        >
          <img
            src={`https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            className={`h-full object-cover`}
          />
        </div>
        <div
          className={`w-[300px] h-full flex flex-col justify-center items-center overflow-hidden pl-5`}
        >
          <div
            className={`w-[300px] h-[120px] flex flex-col justify-center items-center`}
          >
            <div className={`w-[285px] h-[50px] flex flex-row`}>
              <p className={`text-[14px] text-black/80 font-medium`}>
                What style of shoe are you into? A favorite colour maybe?!
              </p>
            </div>
            <div
              className={`w-[280px] h-[70px] flex flex-row relative overflow-hidden`}
            >
              <p
                className={`text-[11px] text-black/50 font-light text-ellipsis`}
              >
                Non cupidatat tempor reprehenderit cillum consectetur ullamco et
                cupidatat sunt sit ullamco. Aute nostrud ex exercitation do et
                qui cupidatat qui consectetur proident pariatur. Commodo laborum
                veniam dolor qui laboris ex. Officia dolor elit mollit aliquip
                quis enim irure et id qui nostrud aliquip.
              </p>
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
                Jun 20, 2022
              </p>
            </div>
            <div
              className={`w-[20px] relative right-[50px] top-[5px] opacity-70`}
            >
              <TwitterShareButton
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
                    {/* <FontAwesomeIcon
                    icon={faShare}
                    className={`h-[14px] w-[14px] text-gray-500/50 transition-all duration-500 hover:text-gray-500 my-1 relative right-[-1.5px] bottom-[-4px] cursor-pointer`}
                    onClick={() => {}}
                  /> */}
                  </div>
                }
                url="https://lwazinf.com"
              />
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
