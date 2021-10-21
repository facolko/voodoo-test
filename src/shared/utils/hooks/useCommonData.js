import React from 'react';

import { usePosts, useUsers } from '../';

export const useCommonData = () => {
  const { posts: rawPosts } = usePosts();
  const { users: rawUsers } = useUsers();
  const [filterName, setFilterName] = React.useState();

  const posts = React.useMemo(() => {
    return rawPosts
      .map((rawPost) => ({
        ...rawPost,
        user: rawUsers?.find((rawUser) => rawUser?.id === rawPost?.userId),
      }))
      .filter(({ user }) => {
        if (filterName)
          return user?.name?.toLowerCase().includes(filterName?.toLowerCase());
        return true;
      });
  }, [rawPosts, rawUsers, filterName]);

  const users = React.useMemo(() => {
    return rawUsers;
  }, [rawUsers]);

  return { posts, users, filterName, setFilterName };
};
