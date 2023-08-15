import { Link } from 'react-router-dom';

import formatDate from '../../../utilities/format-date';

import type { PostProps } from '../../../types/Post';

import styles from './Card.module.scss';

export default function Card({ post }: PostProps) {
  const formattedDate = formatDate(post.published_date);
  const tags = post.tags.map((tag) => {
    return (
      <span key={tag} className={styles.tag}>
        #{tag.toUpperCase()}
      </span>
    );
  });
  return (
    <div className={styles.Card}>
      <Link to={`/writing/${post._id}`}>
        <img src="https://placekitten.com/g/600/300" alt={post.title} />
        <div className={styles.Overlay}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{post.title}</h2>
            <h3 className={styles.date}>{formattedDate}</h3>
            {tags}
          </div>
        </div>
      </Link>
    </div>
  );
}
