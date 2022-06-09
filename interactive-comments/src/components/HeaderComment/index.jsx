import Avatar from "../Avatar";
import "./HeaderComment.css";

export default function HeaderComment({ image, username, createdAt }) {
  return (
    <div className="HeaderComment">
      <Avatar image={image.png} size="small"/>
      <h3 className="header-comment__username">{username}</h3>
      <span className="header-comment__time">{createdAt}</span>
    </div>
  )
}
