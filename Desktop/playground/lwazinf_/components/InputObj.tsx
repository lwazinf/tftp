import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputObj_Props {
    placeHolder_: string,
    option_: string,
    offSet_: number
}
 
const InputObj_ = ({placeHolder_, option_, offSet_}:InputObj_Props) => {
    return ( 
        <div
          className={`w-full h-[45px] relative flex flex-col justify-center items-center top-[${offSet_}px]`}
        >
          <input
            type={"email"}
            placeholder={`${placeHolder_}`}
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
            <p className={`font-medium text-[12px]`}>{option_}</p>
          </div>
        </div>
     );
}
 
export default InputObj_;