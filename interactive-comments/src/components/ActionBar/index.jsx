import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import "./ActionBar.css";

export default function ActionBar() {
  return (
    <div className="ActionBar">
      <DeleteButton />
      <EditButton />
    </div>
  );
}
