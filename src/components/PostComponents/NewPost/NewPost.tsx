import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import slugify from '../../../utilities/create-post-slug';
import availableTags from '../../../utilities/tags';

import type { PostType } from '../../../types/Post';

import styles from './new-post.module.scss';

const NewPost = () => {
  const { user } = useAuth0();
  const author = user?.name || 'Anonymous';

  const navigate = useNavigate();
  const [post, setPost] = useState<PostType>({
    title: '',
    slug: '',
    content: '',
    tags: [],
    author: author,
    published_date: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let slug = slugify(e.target.value);
    setPost({ ...post, title: e.target.value, slug: slug });
  };

  const onContentChange = (value: string) => {
    setPost({ ...post, content: value });
  };

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

  const handleTagChange = (tagName: string) => {
    setPost((prevPost) => ({
      ...prevPost,
      tags: prevPost.tags.includes(tagName)
        ? prevPost.tags.filter((name) => name !== tagName)
        : [...prevPost.tags, tagName],
    }));
  };

  return (
    <div className={styles.NewPostContainer}>
      <h2 className={styles.addPost}>Add Post</h2>

      <form noValidate onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.formInput}
            value={post.title}
            onChange={onTitleChange}
          />
          <div className={styles.slug}>/{slugify(post.title)}</div>
        </div>
        <div>
          <span className={styles.label}>Author</span>
          <span className={styles.author}>{author}</span>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Write</label>
          <ReactQuill
            className={styles.quill}
            theme="snow"
            value={post.content}
            onChange={onContentChange}
          />
        </div>
        <div className={styles.tagGroup}>
          {availableTags.map((tag, i) => (
            <label htmlFor={tag.name} key={i}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={post.tags.includes(tag.name)}
                onChange={() => handleTagChange(tag.name)}
                id={tag.name}
              />
              <span key={i} className={styles.tagLabel}>
                # {tag.name}
              </span>
            </label>
          ))}
        </div>
        <div className={styles.formGroup}>
          <input
            type="date"
            placeholder="published_date"
            name="published_date"
            value={post.published_date}
            onChange={onChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
