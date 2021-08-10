import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Datafetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromClick]);
  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={() => setIdFromClick(id)}>
        Fetch post
      </button>

      <div key={post.id}>{post.title}</div>
    </div>
  );
}

export default Datafetching;
