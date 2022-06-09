import { useContext } from 'react';
import { CommentsContext } from '../../context/CommentsContext';
import Comment from '../Comment';
import './CommentsRoom.css';

export default function CommentsRoom() {
  const { comments } = useContext(CommentsContext);
  return (
    <section className='CommentsRoom'>
      {comments.comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  );
}
