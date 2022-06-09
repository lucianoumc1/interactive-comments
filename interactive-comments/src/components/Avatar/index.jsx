import './Avatar.css'

export default function Avatar({ image, size='regular' }) {
  return (
    <div className={`Avatar ${size} `} >
        <img src={image} alt="avatar" />
    </div>
  )
}
