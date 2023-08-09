import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from './Card/Card'

import styles from './card-container.module.scss';

export default function CardContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error(`Error in CardContainer: ${err.message}`)
      });
  }, []);

  const postList =
    posts.length === 0
      ? 'There are no posts yet!'
      : posts.map((post: any, k: any) => {
        return <Card key={k} post={post} />
      })

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/admin/new-post'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className={styles.CardContainer}>{postList}</div>
      </div>
    </div>
  );
}