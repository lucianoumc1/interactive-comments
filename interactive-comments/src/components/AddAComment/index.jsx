import Avatar from '../Avatar';
import BoxContainer from '../BoxContainer';
import Button from '../Button';
import imageAvatar from '../../assets/images/image-ramsesmiron.png';
import './AddAComment.css';

export default function AddAComment() {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <form className='AddAComment'>
      <BoxContainer>
        <textarea rows="5" placeholder='Add a comment...'></textarea>
        <Avatar image={imageAvatar}/>
        <Button type='submit' text='SEND' handleClick={handleSubmit} />
      </BoxContainer>
    </form>
  )
}
