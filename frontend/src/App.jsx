<<<<<<< HEAD
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  const handleAdd = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1>Simple eCommerce</h1>
      <AddProduct onAdd={handleAdd} />
      <ProductList />
    </div>
=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// الصفحات والمكونات
import UserList from './components/UserList';
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import AddComment from './pages/AddComment';
import MainHome from './pages/MainHome'; // الصفحة الرئيسية

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {/* التنقل */}
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/">🏠 Home</Link> |{" "}
            <Link to="/users">📋 Users</Link> |{" "}
            <Link to="/comments">💬 Comments</Link> |{" "}
            <Link to="/Home">📰 View Posts</Link> |{" "}
            <Link to="/create-post">➕ Add Post</Link> |{" "}
            <Link to="/add-user">👤 Add User</Link> |{" "}
            <Link to="/add-comment">💬 Add Comment</Link>
        </nav>

        {/* المسارات */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/comments" element={<CommentList />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-comment" element={<AddComment />} />
        </Routes>
      </div>
    </Router>
>>>>>>> f213ed6 (حفظ التعديلات مؤقتًا قبل السحب)
  );
}

export default App;
