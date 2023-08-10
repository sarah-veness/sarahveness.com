import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Post } from '../../types/Post';

export default function ShowPost() {
  const [post, setPost] = useState({} as Post)

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch(err => {
        console.error(`Error in ShowPost: ${err.message}`)
      })
  }, [id])

  const onDeleteClick = (id: any) => {
    axios
      .delete(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        navigate('/')
      })
      .catch(err => {
        console.error(`Error in ShowPostDeleteClick: ${err.message}`)
      })
  };

  const Post = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{post.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{post.author}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{post.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{post.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{post.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowpostDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show post List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>post's Record</h1>
            <p className='lead text-center'>View post's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{Post}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(id);
              }}
            >
              Delete post
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/admin/edit-post/${id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};