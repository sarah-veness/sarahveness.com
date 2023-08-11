import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import type { PostProps } from '../../types/Post';

import usePosts from '../../hooks/usePosts';

import styles from './dashboard.module.scss';

export default function Dashboard() {
  let posts = usePosts();

  const onDeleteClick = (id: any) => {
    axios
      .delete(`http://localhost:3000/api/posts/${id}`)
      .then(() => {
        console.log('deleted');
        window.location.reload();
      })
      .catch((err) => {
        console.error(`Error in ShowPostDeleteClick: ${err.message}`);
      });
  };

  function PostItem({ post }: PostProps) {
    return (
      <li className={styles.Post}>
        <Link to={`/admin/edit-post/${post._id}`} className={styles.title}>
          {post.title}
        </Link>
        <div className={styles.buttonGroup}>
          <Link
            to={`/admin/edit-post/${post._id}`}
            className={styles.editButton}
          >
            <FontAwesomeIcon icon={faPen} />
          </Link>
          <span
            className={styles.deleteButton}
            onClick={() => {
              onDeleteClick(post._id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    );
  }

  const postList =
    posts.length === 0
      ? 'There are no posts yet!'
      : posts.map((post, key) => {
          return <PostItem post={post} key={key} />;
        });

  return (
    <div className={styles.Dashboard}>
      <h1>Manage Posts</h1>
      <ul>{postList}</ul>
    </div>
  );
}
