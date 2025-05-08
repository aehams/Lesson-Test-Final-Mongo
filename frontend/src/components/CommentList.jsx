import React, { useEffect, useState } from 'react';
import { api } from '../api';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get('/comments').then(res => setComments(res.data));
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            {comment.content} - <em>{comment.user?.name}</em> On a post:{comment.post?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
