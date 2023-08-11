import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import slugify from '../../utilities/create-post-slug';

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    author: '',
    published_date: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
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
          author: '',
          published_date: '',
        });
        navigate('/');
      })
      .catch((err) => {
        console.error(`Error in createPost: ${err.message}`);
      });
  };

  return (
    <div className="Createpost">
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                <input
                  type="text"
                  placeholder="Describe this post"
                  name="content"
                  className="form-control"
                  value={post.content}
                  onChange={onChange}
                />
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

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
