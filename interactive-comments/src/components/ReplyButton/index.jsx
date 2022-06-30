import "./ReplyButton.css";
import replyImage from "../../assets/avatars/icon-reply.svg";

export default function ReplyButton({ handleClick }) {
  return (
    <button className="ReplyButton" onClick={handleClick}>
      <img src={replyImage} alt="reply-button" />
      Reply
    </button>
  );
}
