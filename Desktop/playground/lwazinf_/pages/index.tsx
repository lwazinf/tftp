import {
  faAdd,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import BubbleObj_ from "../components/BubbleObj_";
import GuestsObj_ from "../components/GuestsObj_";
import InfoObj_ from "../components/InfoObj_";
import InputObj_ from "../components/InputObj";
import TimerObj_ from "../components/TimerObj_";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[1200px] md:w-[600px] min-h-screen relative">
      <div
        className={`w-[400px] min-h-[450px] bg-white rounded-[4px] px-6 py-3 shadow-sm flex flex-col`}
      >
        <div className={`w-full h-[20px] flex flex-row`}>
          <p className={`font-thin text-[18px] text-black/50`}>Create</p>
          <p className={`font-medium text-[18px] text-black/80`}>Event</p>
        </div>
        <div className={`bg-black/10 w-full h-[1px] my-5`} />
        <p className={`font-medium text-[14px] text-black/60`}>Title</p>
        <InputObj_
          placeHolder_={`Event Title`}
          option_={`Desc`}
          offSet_={-15}
        />
        <TimerObj_ />

        <InfoObj_ />

        <p className={`font-medium text-[14px] text-black/60`}>Location</p>
        <InputObj_ placeHolder_={`Location`} option_={`Room`} offSet_={0} />
        <div
          className={`w-full my-3 border-dashed border-b-[1.8px] border-black/30`}
        />
        <p className={`font-medium text-[14px] text-black/60`}>Guests</p>
        <InputObj_ placeHolder_={`Guest email`} option_={`Guest`} offSet_={0} />
        <GuestsObj_ />
        <div className={`w-full flex flex-row pt-2 mb-1`}>
          <p className={`font-medium w-[180px] text-[14px] text-black/60`}>
            Notification
          </p>
          <p className={`font-medium w-full text-[14px] text-black/60`}>
            Reminder
          </p>
        </div>
        <div className={`w-full h-[30px] flex flex-row mb-2`}>
          <div
            className={`w-[170px] h-[30px] p-[2px] rounded-[3px] bg-black/5 flex flex-row`}
          >
            <div
              className={`w-full h-full rounded-[3px] mr-[1px] flex flex-col justify-center items-center hover:bg-white shadow-sm hover:text-black/60 text-[12px] font-medium cursor-pointer bg-black/50 transition-all duration-500 text-white`}
            >
              Email
            </div>
            <div
              className={`w-full h-full rounded-[3px] ml-[1px] flex flex-col justify-center items-center bg-transparent shadow-sm text-black/60 text-[12px] font-medium cursor-pointer transition-all duration-500`}
            >
              Discord
            </div>
          </div>
          <div
            className={`w-full h-[30px] py-[1px] pl-3 pr-[60px] flex flex-row`}
          >
            {/* <div className={`w-full h-full rounded-[3px] shadow-sm border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7]`}></div> */}
            <input
              type={"text"}
              className={`w-full h-full rounded-[3px] shadow-sm border-[1px] border-solid border-[#e7e7e7] bg-[#f7f7f7]`}
            />
          </div>
        </div>
        <p className={`font-medium w-[180px] text-[14px] text-black/60 mb-1`}>
          Permissions
        </p>
        <div className={`flex flex-row items-center h-[20px] opacity-70`}>
          <input type={"checkbox"} className={`w-[15px] h-[15px]`} />
          <p
            className={`font-normal ml-1 min-w-[50px] text-[12px] text-black/60`}
          >
            Modify event
          </p>
        </div>
        <div className={`flex flex-row items-center h-[20px] opacity-70`}>
          <input
            type={"checkbox"}
            checked={true}
            className={`w-[15px] h-[15px]`}
          />
          <p
            className={`font-normal ml-1 min-w-[50px] text-[12px] text-black/60`}
          >
            Invite others
          </p>
        </div>
        <div className={`flex flex-row items-center h-[20px] opacity-70`}>
          <input type={"checkbox"} className={`w-[15px] h-[15px]`} />
          <p
            className={`font-normal ml-1 min-w-[50px] text-[12px] text-black/60`}
          >
            View guests
          </p>
        </div>
        <div
          className={`w-full my-4 border-dashed border-b-[1.8px] border-black/30`}
        />
        <p className={`font-medium w-[180px] text-[14px] text-black/60 mb-1`}>
          Attachments
        </p>
        <div
          className={`w-full h-[100px] border-[1px] border-dashed border-[#e7e7e7] bg-[#f7f7f7] rounded-[4px] mb-1`}
        />
        <div className={`w-full h-[40px] rounded-[6px] shadow-sm bg-[#0084ff] hover:bg-[#0076e3] transition-all duration-500 my-2 flex flex-col justify-center items-center cursor-pointer`}>
        <p
            className={`font-light min-w-[50px] text-[16px] text-white`}
          >
            Create Event
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
