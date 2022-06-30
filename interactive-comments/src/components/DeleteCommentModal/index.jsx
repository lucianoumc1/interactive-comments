import { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import BoxContainer from "../BoxContainer";
import Button from "../Button";
import "./DeleteCommentModal.css";

export default function DeleteCommentModal() {
  const { setOpenModal } = useContext(CommentsContext);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <section className="DeleteCommentModal">
      <BoxContainer>
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can´t be undone
        </p>
        <div className="DeleteCommentModal__buttons">
          <Button
            text="NO, CANCEL"
            type="button"
            color="#ed6468"
            handleClick={handleClose}
          />
          <Button text="YES, DELETE" type="button" color="#324152" />
        </div>
      </BoxContainer>
    </section>
  );
}
