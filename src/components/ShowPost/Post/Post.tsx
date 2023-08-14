import type { PostProps } from '../../../types/Post';

import formatDate from '../../../utilities/format-date';

import styles from './post.module.scss';

const Post = ({ post }: PostProps) => {
  console.log(post);
  const publishedDate = formatDate(post.published_date);
  return (
    <div className={styles.postContainer}>
      <p className={styles.tags}>{post.tags}</p>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{publishedDate}</p>
      <div className={styles.content}>{post.content}</div>
    </div>
  );
};

export default Post;
