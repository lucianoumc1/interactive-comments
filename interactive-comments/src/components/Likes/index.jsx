import "./Likes.css";

export default function Likes({ vertical, score }) {
  return (
    <div className={`Likes ${vertical && "vertical"}`}>
      <button className="likes__btn--plus"></button>
      <span>{score}</span>
      <button className="likes__btn--minus"></button>
    </div>
  );
}
