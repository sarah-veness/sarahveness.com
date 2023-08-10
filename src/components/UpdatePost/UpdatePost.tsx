import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePostInfo(props: any) {
  const [post, setpost] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setpost({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatepostInfo');
      });
  }, [id]);

  const onChange = (e: any) => {
    setpost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: post.title,
      isbn: post.isbn,
      author: post.author,
      description: post.description,
      published_date: post.published_date,
      publisher: post.publisher,
    };

    axios
      .put(`http://localhost:3000/api/posts/${id}`, data)
      .then((res) => {
        navigate(`/writing/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatepostInfo!');
      });
  };

  return (
    <div className="UpdatepostInfo">
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
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={post.isbn}
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
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Description of the post"
                name="description"
                className="form-control"
                value={post.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="text"
                placeholder="Published Date"
                name="published_date"
                className="form-control"
                value={post.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of the post"
                name="publisher"
                className="form-control"
                value={post.publisher}
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

export default UpdatePostInfo;
