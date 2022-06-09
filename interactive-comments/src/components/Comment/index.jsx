import BoxContainer from "../BoxContainer";
import HeaderComment from "../HeaderComment";
import ActionBar from "../ActionBar";
import ReplySection from '../ReplySection';
import './Comment.css';

export default function Comment({createdAt, user, content, replies, score}) {
  return (
    <div className='Comment'>
    <BoxContainer>
        <HeaderComment createdAt={createdAt} username={user.username} image={user.image} />
        <p>{content}</p>
      <ActionBar score={score} />
    </BoxContainer>
      {replies && replies.map(reply => (
        <ReplySection key={reply.id} >
          <Comment {...reply} />
        </ReplySection>
    ))}  
    </div>
  )
}
