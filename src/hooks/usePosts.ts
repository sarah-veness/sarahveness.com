import { useState, useEffect } from 'react';
import axios from 'axios';

import type { PostType } from '../types/Post';

const usePosts = () => {
  const [posts, setPosts] = useState([] as PostType[]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(`Error fetching posts: ${err.message}`);
      });
  }, []);

  return posts;
};

export default usePosts;
