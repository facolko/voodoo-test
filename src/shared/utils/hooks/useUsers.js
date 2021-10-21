import React from 'react';

import axios from 'axios';

export const useUsers = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = React.useCallback(async () => {
    try {
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      });

      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, setUsers, getUsers };
};
