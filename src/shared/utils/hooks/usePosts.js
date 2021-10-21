import React from 'react';

import axios from 'axios';

export const usePosts = () => {
  const [posts, setPosts] = React.useState([]);

  const getPosts = React.useCallback(async () => {
    try {
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
      });

      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  return { posts, setPosts, getPosts };
};
