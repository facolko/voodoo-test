import React from 'react';

import { PostCover } from '../';

const ShowingPosts = ({ posts }) => {
  return (
    <div class="row">
      {posts?.map((post) => (
        <PostCover key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ShowingPosts;
