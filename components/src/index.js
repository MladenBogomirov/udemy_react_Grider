import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatarImage={faker.image.avatar()}
          commentText="Awesome!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Josh"
          timeAgo="Today at 2:00AM"
          avatarImage={faker.image.avatar()}
          commentText="Woah... great article"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Matt"
          timeAgo="Today at 5:00PM"
          avatarImage={faker.image.avatar()}
          commentText="Meh... I already knew those stuff"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />,  document.querySelector('#root'));