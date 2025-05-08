import React from 'react';
import { Link } from 'react-router-dom';

const MainHome = () => {
  return (
    <div>
      <h1>Welcome to the control panel</h1>
      <p>Choose what you want to do:</p>
      <ul>
        <li><Link to="/create-post">➕ Create a post</Link></li>
        <li><Link to="/add-user">👤 Add user</Link></li>
        <li><Link to="/add-comment">💬 Add a comment</Link></li>
        <li><Link to="/users">📋 View users</Link></li>
        <li><Link to="/comments">📋 View comments</Link></li>
        <li><Link to="/Home">📰 View all posts</Link></li>
      </ul>
    </div>
  );
};

export default MainHome;
