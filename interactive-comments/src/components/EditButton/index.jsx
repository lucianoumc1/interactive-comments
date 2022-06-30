import "./EditButton.css";
import editImage from "../../assets/avatars/icon-edit.svg";

export default function EditButton() {
  return (
    <button className="EditButton">
      <img src={editImage} alt="edit-button" />
      Edit
    </button>
  );
}
