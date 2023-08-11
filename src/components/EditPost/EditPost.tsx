import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import slugify from '../../utilities/create-post-slug';

function EditPost() {
  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    author: '',
    updated_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          slug: res.data.slug,
          content: res.data.content,
          author: res.data.author,
          updated_date: '',
        });
      })
      .catch((err) => {
        console.log(`Error from EditPost, ${err}`);
      });
  }, [id]);

  const onChange = (e: any) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: post.title,
      slug: slugify(post.title),
      content: post.content,
      author: post.author,
      updated_date: post.updated_date,
    };

    axios
      .put(`http://localhost:3000/api/posts/${id}`, data)
      .then(() => {
        navigate(`/post/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditPost!', err);
      });
  };

  return (
    <div className="EditPost">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/admin" className="btn btn-outline-warning float-left">
              BACK TO POSTS
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit post</h1>
            <p className="lead text-center">Update post's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the post"
                name="title"
                className="form-control"
                value={post.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={post.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Content</label>
              <textarea
                placeholder="Description of the post"
                name="content"
                className="form-control"
                value={post.content}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="updated_date">Updated Date</label>
              <input
                type="text"
                placeholder="Published Date"
                name="updated_date"
                className="form-control"
                value={post.updated_date}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
