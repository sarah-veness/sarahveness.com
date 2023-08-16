import { useState, useEffect } from 'react';
import axios from 'axios';

import type { PostType } from 'types/Post';

const useGetPosts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = () => {
    axios
      .get('http://localhost:3000/api/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Error fetching posts: ${err.message}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { loading, posts };
};

export default useGetPosts;
