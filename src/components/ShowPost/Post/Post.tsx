import type { PostProps } from '../../../types/Post';

import { formatDate } from '../../../utilities';

import styles from './post.module.scss';

const Post = ({ post }: PostProps) => {
  const publishedDate = formatDate(post.published_date);
  const htmlContent = () => {
    return { __html: post.content };
  };
  return (
    <div className={styles.postContainer}>
      <p className={styles.tags}>{post.tags}</p>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{publishedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={htmlContent()}
      ></div>
    </div>
  );
};

export default Post;
