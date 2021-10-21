import React from 'react';

const PostCover = ({ title, user, body }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card m-1">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">{body}</p>
          <p className="card-text text-secondary">{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCover;
