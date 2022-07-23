import { faReply, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../../atoms/atoms";
import SubCommentObj_ from "./SubCommentObj_";

interface CommentObj_Props {}

const CommentObj_ = ({}: CommentObj_Props) => {
  const [reply_, setReply_] = useState(false);
  const [like_, setLike_] = useState(false);
  let [objects_, setObjects_] = useState<string[]>([""]);
  const [comment_, setComment_] = useRecoilState(commentState);
  return (
    <div className={`flex flex-col relative right-[70px] mb-[10px]`}>
      <div
        className={`w-[400px] h-[80px] bg-white hover:bg-white mb-[6px] ${
          comment_
            ? "pointer-events-auto opacity-100 top-2"
            : "pointer-events-none opacity-0 top-[-15px]"
        } transition-all duration-300 rounded-[4px] shadow-sm relative`}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={`transition-all duration-500 h-[16px] w-[16px] ${
            like_ ? "text-black/30" : "text-black/20"
          } hover:text-black/30 m-2 cursor-pointer absolute right-[0px] bottom-1`}
          onClick={() => {
            setLike_(!like_);
          }}
        />
        <FontAwesomeIcon
          icon={faReply}
          className={`transition-all duration-500 h-[14px] w-[14px] ${
            reply_ ? "text-black/30" : "text-black/20"
          } hover:text-black/30 m-2 cursor-pointer absolute right-[27px] bottom-1`}
          onClick={() => {
              setObjects_(objects_.concat(['']))
          }}
        />
      </div>
      {
        objects_.map((object, i) => {
            
            return <SubCommentObj_ key={i}/>
            
        })
      }
    </div>
  );
};

export default CommentObj_;
