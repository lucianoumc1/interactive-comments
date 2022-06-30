import { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import AddAComment from "../AddAComment";
import CommentsRoom from "../CommentsRoom";
import DeleteCommentModal from "../DeleteCommentModal";
import Modal from "../Modal";

function App() {
  const { openModal } = useContext(CommentsContext);
  return (
    <div className="App">
      {openModal && (
        <Modal>
          <DeleteCommentModal />
        </Modal>
      )}
      <CommentsRoom />
      <AddAComment />
    </div>
  );
}

export default App;
