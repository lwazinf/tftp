import BubbleObj_ from "./BubbleObj_";

interface GuestsObj_Props {
    
}
 
const GuestsObj_ = ({}:GuestsObj_Props) => {
    return ( 
        <div className={`w-full h-[45px] flex flex-row pt-2 mb-[1px]`}>
          <BubbleObj_/>
          <BubbleObj_/>
          <BubbleObj_/>
          <BubbleObj_/>
          <div className={`w-[20px] h-[18px] mt-2 ml-1 rounded-[8px] bg-black/5 text-black/30 text-[12px] font-medium flex flex-col justify-center items-center`}>
            +3
          </div>
        </div>
     );
}
 
export default GuestsObj_;