import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import slugify from '../../../utilities/create-post-slug';
import availableTags from '../../../utilities/tags';

import type { PostType } from '../../../types/Post';
import ContentEditor from '../ContentEditor/ContentEditor';

// import styles from './new-post.module.scss';

const NewPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType>({
    title: '',
    slug: '',
    content: '',
    tags: [],
    author: '',
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
    <div className="NewPost">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show post List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add post</h1>
            <p className="lead text-center">Create new post</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the post"
                  name="title"
                  className="form-control"
                  value={post.title}
                  onChange={onTitleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Slug for the post"
                  name="slug"
                  className="form-control"
                  readOnly
                  value={slugify(post.title)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={post.author}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <ContentEditor
                  initialValue={post.content}
                  handleOnChange={onContentChange}
                />
              </div>
              <div className="form-group">
                {availableTags.map((tag, i) => (
                  <label key={i}>
                    <input
                      type="checkbox"
                      checked={post.tags.includes(tag.name)}
                      onChange={() => handleTagChange(tag.name)}
                    />
                    {tag.name}
                  </label>
                ))}
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={post.published_date}
                  onChange={onChange}
                />
              </div>

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
