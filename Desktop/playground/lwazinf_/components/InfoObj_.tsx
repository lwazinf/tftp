import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InfoObj_Props {
    
}
 
const InfoObj_ = ({}:InfoObj_Props) => {
    return ( 
        <div
          className={`w-full h-[20px] flex flex-row items-center pl-2 mb-3`}
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
     );
}
 
export default InfoObj_;