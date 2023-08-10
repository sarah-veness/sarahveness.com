import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import usePosts from '../../hooks/usePosts';

import type { Post } from '../../types/Post';

import styles from './dashboard.module.scss';

export default function Dashboard() {
  let posts = usePosts();

  const { id } = useParams();
  const navigate = useNavigate();

  const onDeleteClick = (id: any) => {
    axios
      .delete(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.error(`Error in ShowPostDeleteClick: ${err.message}`);
      });
  };

  const Post = (props: any) => {
    const post = props.post;
    const index = props.k;
    return (
      <li className={styles.Post}>
        <Link to={`/admin/edit-post/${post._id}`} key={index}>
          {post.title}
        </Link>
        <div className="col-md-6 m-auto">
          <button
            type="button"
            className="btn btn-outline-danger btn-lg btn-block"
            onClick={() => {
              onDeleteClick(id);
            }}
          >
            Delete post
          </button>
        </div>

        <div className="col-md-6 m-auto">
          <Link
            to={`/admin/edit-post/${post._id}`}
            className="btn btn-outline-info btn-lg btn-block"
          >
            Edit post
          </Link>
        </div>
      </li>
    );
  };

  const postList =
    posts.length === 0
      ? 'There are no posts yet!'
      : posts.map((post: Post, k: number) => {
          return <Post post={post} k={k} />;
        });

  return (
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <ul>{postList}</ul>
    </div>
  );
}
