import type { PostProps } from '../../../../types/Post';

import { formatDate } from '../../../../utilities';

import styles from './post.module.scss';

const Post = ({ post }: PostProps) => {
  const publishedDate = formatDate(post.published_date);
  const updatedDate = post.updated_date && formatDate(post.updated_date);
  const htmlContent = () => {
    return { __html: post.content };
  };
  return (
    <div className={styles.postContainer}>
      <p className={styles.tags}>{post.tags}</p>
      <h1 className={styles.title}>{post.title}</h1>
      {post.updated_date && (
        <p className={styles.date}>Updated Date: {updatedDate}</p>
      )}
      <p className={styles.date}>Published Date: {publishedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={htmlContent()}
      ></div>
    </div>
  );
};

export default Post;
