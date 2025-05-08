// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  // جلب المنشورات عند تحميل المكون
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // إجراء طلب جلب المنشورات من الخادم
        const response = await axios.get('http://localhost:5900/api/posts');
        setPosts(response.data); // إذا كانت الاستجابة تحتوي على مصفوفة من المنشورات
      } catch (error) {
        console.error('error :', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All posts</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
            <p>There are no posts currently.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
