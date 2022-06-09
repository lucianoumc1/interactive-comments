import DeleteIcon from '../../assets/avatars/icon-delete.svg';
import './DeleteButton.css';

export default function DeleteButton() {
  return (
    <button className='DeleteButton'>
    <img src={DeleteIcon} alt="delete-button" />
    Delete
  </button>
  )
}
