import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../../atoms/atoms";

interface SubCommentObj_Props {}

const SubCommentObj_ = ({}: SubCommentObj_Props) => {
    const [like_, setLike_] = useState(false);
    const [comment_, setComment_] = useRecoilState(commentState);
  return (
    <div
      className={`w-[350px] h-[60px] bg-white/40 relative hover:right-[12px] ${
        comment_
          ? "pointer-events-auto opacity-100 top-0"
          : "pointer-events-none opacity-0 top-[-15px]"
      } transition-all duration-500 border-solid border-[1px] border-black/10 rounded-[4px] shadow-sm relative right-[10px] top-2 mb-1`}
    >
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`transition-all duration-500 h-[16px] w-[16px] ${
          like_ ? "text-black/30" : "text-black/10"
        } hover:text-black/30 m-2 cursor-pointer absolute right-[0px] bottom-1`}
        onClick={() => {
          setLike_(!like_);
        }}
      />
    </div>
  );
};

export default SubCommentObj_;