import { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import Comment from "../Comment";
import "./CommentsRoom.css";

export default function CommentsRoom() {
  const { localData } = useContext(CommentsContext);
  return (
    <section className="CommentsRoom">
      {localData.comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  );
}
