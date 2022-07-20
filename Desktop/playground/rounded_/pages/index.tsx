import { faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faShare,
  faCheckCircle,
  faTimesCircle,
  faCartShopping,
  faBookmark,
  faDeleteLeft,
  faTrash,
  faComment,
  faThumbsUp,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[1200px] md:w-[600px] min-h-screen relative">
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
            <FontAwesomeIcon
              icon={faShare}
              className={`h-[14px] w-[14px] text-gray-500 my-1 relative right-[-1.5px] bottom-[-4px] cursor-pointer`}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div
        className={`w-[90px] h-[30px] mt-3 ml-[300px] z-20 rounded-[4px] shadow-md bg-black/60 flex flex-row justify-center items-center relative`}
      >
        <FontAwesomeIcon
          icon={faComment}
          className={`h-[14px] w-[14px] text-white/100 m-2 mr-1 relative right-[0px] bottom-[1px] cursor-pointer`}
          onClick={() => {}}
        />
        <FontAwesomeIcon
          icon={faBookmark}
          className={`h-[12px] w-[12px] text-white/60 m-2 mr-1 relative right-[-1.5px] bottom-[1px] cursor-pointer`}
          onClick={() => {}}
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          className={`h-[13px] w-[13px] text-white/60 m-2 relative right-[-1.5px] bottom-[1px] cursor-pointer`}
          onClick={() => {}}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className={`h-[16px] w-[16px] text-black/60 m-2 cursor-pointer absolute right-[-35px]`}
          onClick={() => {}}
        />
      </div>

      <div>
        <div
          className={`w-[400px] h-[80px] bg-white/90 rounded-[4px] shadow-sm relative right-[70px] top-2`}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={`h-[16px] w-[16px] text-black/20 m-2 cursor-pointer absolute right-[0px] bottom-1`}
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faReply}
            className={`h-[14px] w-[14px] text-black/20 m-2 cursor-pointer absolute right-[27px] bottom-1`}
            onClick={() => {}}
          />
        </div>
        <div
          className={`w-[350px] h-[60px] bg-white/40 border-solid border-[1px] border-black/10 mb-8 rounded-[4px] shadow-sm relative right-[90px] top-4`}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={`h-[16px] w-[16px] text-black/10 m-2 cursor-pointer absolute right-[0px] bottom-1`}
            onClick={() => {}}
          />
        </div>

        <div
          className={`w-[400px] h-[80px] bg-white/90 rounded-[4px] shadow-sm relative right-[70px] top-2`}
        >
          <img src={`/assets/images/LwaziNF.png`} className={`w-[100px] absolute left-[-80px] top-[-130px]`}/>
          <p className={`absolute top-[-10px] left-[-80px] text-[25px] font-black`}>
        LwaziNF
      </p>
          <FontAwesomeIcon
            icon={faReply}
            className={`h-[14px] w-[14px] text-black/20 m-2 cursor-pointer absolute right-[27px] bottom-1`}
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={`h-[16px] w-[16px] text-black/20 m-2 cursor-pointer absolute right-[0px] bottom-1`}
            onClick={() => {}}
          />
        </div>
        <div
          className={`w-[350px] h-[60px] bg-white/40 border-solid border-[1px] border-black/10 rounded-[4px] shadow-sm relative right-[90px] top-4 mb-2`}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={`h-[16px] w-[16px] text-black/10 m-2 cursor-pointer absolute right-[0px] bottom-1`}
            onClick={() => {}}
          />
        </div>
        <div
          className={`w-[350px] h-[60px] bg-white/40 border-solid border-[1px] border-black/10 rounded-[4px] shadow-sm relative right-[90px] top-4 mb-4`}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={`h-[16px] w-[16px] text-black/10 m-2 cursor-pointer absolute right-[0px] bottom-1`}
            onClick={() => {}}
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;
