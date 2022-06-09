import './ReplyButton.css';
import replyImage from "../../assets/avatars/icon-reply.svg"

export default function ReplyButton() {
  return (
    <button className='ReplyButton'>
      <img src={replyImage} alt="reply-button" />
      Reply
    </button>
  )
}
