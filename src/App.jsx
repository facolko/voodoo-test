import React from 'react';

import { useCommonData, ShowingPosts, FilterAuthor } from './shared';

function App() {
  const { posts, filterName, setFilterName } = useCommonData();

  return (
    <div className="container mt-4 mb-4">
      <FilterAuthor {...{ filterName, setFilterName }} />
      <ShowingPosts posts={posts} />
    </div>
  );
}

export default App;
