import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';

import useGetPosts from 'hooks/useGetPosts';

import type { PostProps } from 'types/Post';

import styles from './dashboard.module.scss';

export default function Dashboard() {
  const { posts } = useGetPosts();
  const [postId, setPostId] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const DeleteModal = () => {
    return (
      <div
        className={`${styles.DeleteModal} ${
          isModalVisible ? styles.active : styles.hidden
        }`}
      >
        <p>Are you sure you want to delete this post?</p>
        <p>
          This <b>cannot</b> be undone
        </p>
        <button onClick={() => onDeleteClick(postId)}>Delete</button>
        <span onClick={toggleModal}>X</span>
      </div>
    );
  };

  function PostItem({ post }: PostProps) {
    return (
      <li className={styles.Post}>
        <Link to={`/admin/edit-post/${post._id}`} className={styles.title}>
          {post.title}
        </Link>
        <div className={styles.buttonGroup}>
          <Link to={`/writing/${post._id}`} className={styles.viewButton}>
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link
            to={`/admin/edit-post/${post._id}`}
            className={styles.editButton}
          >
            <FontAwesomeIcon icon={faPen} />
          </Link>
          <span
            className={styles.deleteButton}
            onClick={() => {
              toggleModal();
              setPostId(post._id);
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
    <>
      <div
        className={`${styles.Dashboard} ${isModalVisible ? styles.blur : ''}`}
      >
        <h1>Manage Posts</h1>
        <ul>{postList}</ul>
      </div>
      <DeleteModal />
    </>
  );
}
