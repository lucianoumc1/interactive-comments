import BoxContainer from "../BoxContainer";
import HeaderComment from "../HeaderComment";
import ActionBar from "../ActionBar";
import ReplySection from "../ReplySection";
import Likes from "../Likes";
import ReplyButton from "../ReplyButton";
import { useState, useEffect, useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";

import screenWidthObserver from "../../utils/screenWidth";
import "./Comment.css";

export default function Comment({
  id,
  createdAt,
  user,
  content,
  replies,
  score,
}) {
  const {
    localData: { currentUser },
  } = useContext(CommentsContext);

  const screenWidth = screenWidthObserver();

  const handleReply = () => {
    console.log(id);
  };

  return (
    <div className="Comment">
      <BoxContainer>
        {screenWidth > 768 && <Likes vertical score={score} />}
        <div className="comment__mobile-section">
          <HeaderComment
            createdAt={createdAt}
            username={user.username}
            image={user.image}
          />
          <p>{content}</p>
          <div className="mobile-section__actions">
            {screenWidth < 768 && <Likes score={score} />}
            {currentUser.username === user.username ? (
              <ActionBar />
            ) : (
              <ReplyButton handleClick={handleReply} />
            )}
          </div>
        </div>
      </BoxContainer>
      {replies &&
        replies.map((reply) => (
          <ReplySection key={reply.id}>
            <Comment {...reply} />
          </ReplySection>
        ))}
    </div>
  );
}
