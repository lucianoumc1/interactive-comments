import './Likes.css';

export default function Likes({likes, vertical, score}) {
  return (
    <div className={`Likes ${vertical && "vertical"}`} >
      <button className='likes__btn--plus'><img src="" alt="" /></button>
      <span>{score}</span>
      <button className='likes__btn--minus'><img src="" alt="" /></button>
    </div>
  )
}
