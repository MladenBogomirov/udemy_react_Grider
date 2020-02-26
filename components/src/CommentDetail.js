import React from 'react';

const CommentDetail = ({ author, timeAgo, commentText, avatarImage }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatarImage} alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{commentText}</div>
      </div>
    </div>
  );
}

export default CommentDetail;