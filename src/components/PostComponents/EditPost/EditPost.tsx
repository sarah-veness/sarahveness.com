import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import PostForm from '../PostForm/PostForm';

import type { PostType } from '../../../types/Post';

import { slugify } from '../../../utilities';

export default function EditPost() {
  const [post, setPost] = useState<Partial<PostType>>({
    title: '',
    slug: '',
    content: '',
    tags: [],
    author: '',
    updated_date: '',
    published_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const todaysDate = new Date().toLocaleDateString();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          slug: res.data.slug,
          content: res.data.content,
          tags: res.data.tags,
          author: res.data.author,
          updated_date: todaysDate,
          published_date: res.data.published_date,
        });
      })
      .catch((err) => {
        console.log(`Error from EditPost, ${err}`);
      });
  }, [id, todaysDate]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: post.title,
      slug: slugify(post.title!),
      tags: post.tags,
      content: post.content,
      author: post.author,
      updated_date: todaysDate,
    };

    axios
      .put(`http://localhost:3000/api/posts/${id}`, data)
      .then(() => {
        navigate(`/writing/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditPost!', err);
      });
  };

  return (
    <PostForm
      post={post}
      setPost={setPost}
      onSubmit={onSubmit}
      heading={'Edit Post'}
    />
  );
}
