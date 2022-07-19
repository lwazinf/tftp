import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BubbleObj_Props {
    
}
 
const BubbleObj_ = ({}:BubbleObj_Props) => {
    return ( 
        <div
            className={`w-[35px] h-[35px] flex flex-row justify-center bg-black/40 rounded-[50%] relative mx-[2px]`}
          >
            <div
              className={`w-[17px] h-[17px] flex flex-row bg-white rounded-[50%] absolute right-0 top-0`}
            >
              <FontAwesomeIcon
                icon={faTimesCircle}
                className={`h-[12px] w-[12px] text-gray-500 my-1 relative right-[-1.5px] bottom-[1px] cursor-pointer`}
                onClick={() => {}}
              />
            </div>
          </div>
     );
}
 
export default BubbleObj_;