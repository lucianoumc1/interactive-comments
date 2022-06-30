import DeleteIcon from "../../assets/avatars/icon-delete.svg";
import "./DeleteButton.css";

export default function DeleteButton({ handleClick }) {
  return (
    <button className="DeleteButton" onClick={handleClick}>
      <img src={DeleteIcon} alt="delete-button" />
      Delete
    </button>
  );
}
