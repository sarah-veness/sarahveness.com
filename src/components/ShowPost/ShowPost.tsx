import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Post from './Post/Post';

export default function ShowPost() {
  const [post, setPost] = useState({} as Post);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(`Error in ShowPost: ${err.message}`);
      });
  }, [id]);

  return (
    <div className="ShowpostDetails">
      <Link to="/writing">Back to Posts</Link>
      <hr />
      <Post post={post} />
    </div>
  );
}
