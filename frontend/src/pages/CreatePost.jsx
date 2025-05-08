// src/pages/CreatePost.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // التعامل مع إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // بناء الكائن الجديد للمنشور
      const newPost = { title, content };

      // إرسال الطلب إلى الخادم لإنشاء منشور جديد
      const response = await axios.post('http://localhost:5900/api/posts', newPost);

      // عرض رسالة نجاح عند إرسال البيانات بنجاح
      setSuccessMessage('User created successfully');
      setErrorMessage('');
    } catch (error) {
      // عرض رسالة خطأ في حال فشل الطلب
      setErrorMessage('error');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>  Add a new post </h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>the address</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add a new post </button>
      </form>
    </div>
  );
};

export default CreatePost;
