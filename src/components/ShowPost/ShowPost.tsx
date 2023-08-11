import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { Post } from '../../types/Post';

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

  const Post = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{post.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{post.author}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{post.published_date}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Updated Date</td>
            <td>{post.updated_date}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>tags</td>
            <td>{post.tags}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{post.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowpostDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <Link to="/" className="btn btn-outline-warning float-left">
              Back to Posts
            </Link>
          </div>
          <hr />
          <div className="col-md-10 m-auto">{Post}</div>
        </div>
      </div>
    </div>
  );
}
