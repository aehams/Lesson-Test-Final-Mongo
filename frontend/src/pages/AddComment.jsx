import React, { useEffect, useState } from 'react';
import { api } from '../api';

const AddComment = () => {
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [postId, setPostId] = useState('');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data));
    api.get('/posts').then(res => setPosts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/comments', { content, user: userId, post: postId });
      setMessage('Comment added successfully');
      setContent('');
      setUserId('');
      setPostId('');
    } catch (err) {
      setMessage('❌ error ');
    }
  };

  return (
    <div>
      <h1>Add a comment </h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>user</label>
          <select value={userId} onChange={(e) => setUserId(e.target.value)} required>
            <option value="">Select user </option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Post</label>
          <select value={postId} onChange={(e) => setPostId(e.target.value)} required>
            <option value="">Select the post </option>
            {posts.map(post => (
              <option key={post._id} value={post._id}>{post.title}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddComment;
