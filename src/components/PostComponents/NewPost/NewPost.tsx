import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import PostForm from '../PostForm/PostForm';

import type { PostType } from 'types/Post';

const NewPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Partial<PostType>>({
    title: '',
    slug: '',
    content: '',
    tags: [],
    author: '',
    updated_date: '',
    published_date: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/posts', post)
      .then(() => {
        setPost({
          title: '',
          slug: '',
          content: '',
          tags: [],
          author: '',
          published_date: '',
        });
        navigate('/');
      })
      .catch((err) => {
        console.error(`Error in NewPost: ${err}`);
      });
  };

  return (
    <PostForm
      post={post}
      setPost={setPost}
      onSubmit={onSubmit}
      heading={'New Post'}
    />
  );
};

export default NewPost;
