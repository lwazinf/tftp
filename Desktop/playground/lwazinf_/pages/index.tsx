import { faAdd, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <div
        className={`w-[400px] h-[450px] bg-white rounded-[4px] px-6 py-3 shadow-sm flex flex-col`}
      >
        <div className={`w-full h-[20px] flex flex-row`}>
          <p className={`font-thin text-[18px] text-black/50`}>Create</p>
          <p className={`font-medium text-[18px] text-black/80`}>Event</p>
        </div>
        <div className={`bg-black/10 w-full h-[1px] my-5`} />
        <p className={`font-medium text-[14px] text-black/60`}>Title</p>
        <div
          className={`w-full h-[45px] relative flex flex-col justify-center items-center mb-5`}
        >
          <input
            type={"text"}
            placeholder={`Event title`}
            className={`w-full h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] my-1`}
          />
          <div
            className={`absolute right-0 w-[100px] h-[24px] m-[3px] bg-white hover:bg-black/50 text-black/50 hover:text-white border-solid border-[1px] border-[#e7e7e7] rounded-[4px] flex flex-row justify-center items-center cursor-pointer shadow-sm hover:shadow-none transition-all duration-500`}
          >
            <FontAwesomeIcon
              icon={faAdd}
              className={`h-[14px] w-[14px] my-1 relative right-1`}
              onClick={() => {}}
            />
            <p className={`font-medium text-[12px]`}>Desc</p>
          </div>
        </div>

        <div
          className={`w-full h-[20px] flex flex-col items-center justify-center mb-3`}
        >
          <div className={`w-full h-[20px] flex flex-row items-center mb-2`}>
            <p className={`font-normal text-[13px] text-black/50 w-full`}>
              Date
            </p>
            <p className={`font-normal text-[13px] text-black/50 w-[250px]`}>
              Time
            </p>
            <p
              className={`font-normal text-[13px] text-black/50 w-full relative left-1`}
            >
              Duration
            </p>
          </div>
          <div
            className={`w-full h-[20px] flex flex-row items-center justify-center`}
          >
            <input
              type={"date"}
              className={`w-full h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] my-1`}
            />
            <input
              type={"time"}
              step={900}
              className={`w-[250px] h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] m-1`}
            />
            <input
              type={"time"}
              className={`w-full h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] my-1`}
            />
          </div>
        </div>

        <div
          className={`w-full h-[20px] flex flex-row items-center pl-2 mb-3 mt-3`}
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={`h-[12px] w-[12px] my-1 relative right-1 text-green-400`}
            onClick={() => {}}
          />
          <p className={`font-light text-[11px] text-black/50`}>
            This event will take place on
          </p>
          <p
            className={`font-semibold text-[11px] text-black/60 relative left-[2.5px]`}
          >
            July 14, 2022
          </p>
          <p
            className={`font-light text-[11px] text-black/50 relative left-[5.5px]`}
          >
            from
          </p>
          <p
            className={`font-semibold text-[11px] text-black/60 relative left-[7px]`}
          >
            14:00
          </p>
          <p
            className={`font-light text-[11px] text-black/50 relative left-[9px]`}
          >
            to
          </p>
          <p
            className={`font-semibold text-[11px] text-black/60 relative left-[10px]`}
          >
            15:45
          </p>
        </div>

        <p className={`font-medium text-[14px] text-black/60`}>Location</p>
        <div
          className={`w-full h-[45px] relative flex flex-col justify-center items-center`}
        >
          <input
            type={"text"}
            placeholder={`Location`}
            className={`w-full h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] my-1`}
          />
          <div
            className={`absolute right-0 w-[100px] h-[24px] m-[3px] bg-white hover:bg-black/50 text-black/50 hover:text-white border-solid border-[1px] border-[#e7e7e7] rounded-[4px] flex flex-row justify-center items-center cursor-pointer shadow-sm hover:shadow-none transition-all duration-500`}
          >
            <FontAwesomeIcon
              icon={faAdd}
              className={`h-[14px] w-[14px] my-1 relative right-1`}
              onClick={() => {}}
            />
            <p className={`font-medium text-[12px]`}>Room</p>
          </div>
        </div>
        <div
          className={`w-full my-3 border-dashed border-b-[1.8px] border-black/30`}
        />
        <p className={`font-medium text-[14px] text-black/60`}>Guests</p>
        <div
          className={`w-full h-[45px] relative flex flex-col justify-center items-center`}
        >
          <input
            type={"email"}
            placeholder={`Guest email`}
            className={`w-full h-[30px] text-[14px] font-thin text-black/50 px-2 border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] my-1`}
          />
          <div
            className={`absolute right-0 w-[100px] h-[24px] m-[3px] bg-white hover:bg-black/50 text-black/50 hover:text-white border-solid border-[1px] border-[#e7e7e7] rounded-[4px] flex flex-row justify-center items-center cursor-pointer shadow-sm hover:shadow-none transition-all duration-500`}
          >
            <FontAwesomeIcon
              icon={faAdd}
              className={`h-[14px] w-[14px] my-1 relative right-1`}
              onClick={() => {}}
            />
            <p className={`font-medium text-[12px]`}>Guest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
