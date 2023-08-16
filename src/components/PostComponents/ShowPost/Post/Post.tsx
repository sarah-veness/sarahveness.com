import { Link } from 'react-router-dom';

import type { PostProps } from 'types/Post';

import formatDate from 'utilities/format-date';

import styles from './post.module.scss';

const Post = ({ post }: PostProps) => {
  const publishedDate = formatDate(post.published_date);
  const updatedDate = post.updated_date && formatDate(post.updated_date);
  const htmlContent = () => {
    return { __html: post.content };
  };
  const renderTags = post?.tags?.map((tag) => {
    return (
      <span key={tag} className={styles.tags}>
        <Link to={`/writing/tags/${tag.toLowerCase()}`}>
          #{tag.toUpperCase()}
        </Link>
      </span>
    );
  });

  return (
    <div className={styles.postContainer}>
      <div className={styles.tagContainer}>{renderTags}</div>
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
