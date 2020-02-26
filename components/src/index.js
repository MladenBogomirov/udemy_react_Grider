import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatarImage={faker.image.avatar()}
        commentText="Awesome!"
      />
      <CommentDetail
        author="Josh"
        timeAgo="Today at 2:00AM"
        avatarImage={faker.image.avatar()}
        commentText="Woah... great article"
      />
      <CommentDetail
        author="Matt"
        timeAgo="Today at 5:00PM"
        avatarImage={faker.image.avatar()}
        commentText="Meh... I already knew those stuff"
      />
    </div>
  );
};

ReactDOM.render(<App />,  document.querySelector('#root'));