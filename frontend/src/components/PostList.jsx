import React, { useEffect, useState } from 'react';
import { api } from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Publications</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <strong>{post.title}</strong><br />
            {post.content}<br />
            <em>author : {post.user?.name}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
