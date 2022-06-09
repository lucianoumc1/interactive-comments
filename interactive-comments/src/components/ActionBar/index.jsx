import Likes from '../Likes';
import ReplyButton from '../ReplyButton';
import DeleteButton from '../DeleteButton';
import './ActionBar.css'

export default function ActionBar({ score }) {
  return (
    <div className='ActionBar'>
      <Likes score={ score }/>
      <DeleteButton />
      <ReplyButton />
    </div>
  )
}
