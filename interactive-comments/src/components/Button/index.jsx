import './Button.css';

export default function Button({ text, type='button', handleClick }) {
  return (
    <button className='Button' type={type} onClick={handleClick}>
      {text}
    </button>
  )
}
