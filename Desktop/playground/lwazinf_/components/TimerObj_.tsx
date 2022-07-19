interface TimerObj_Props {
    
}
 
const TimerObj_ = ({}:TimerObj_Props) => {
    return ( 
        <div
          className={`w-full h-[50px] flex flex-col items-center justify-center mb-3`}
        >
          <div className={`w-full h-[20px] flex flex-row items-center`}>
            <p className={`font-normal text-[13px] text-black/50 h-[30px] w-full`}>
              Date
            </p>
            <p className={`font-normal text-[13px] text-black/50 h-[30px] w-[250px]`}>
              Time
            </p>
            <p
              className={`font-normal text-[13px] text-black/50 h-[30px] w-full`}
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
     );
}
 
export default TimerObj_;