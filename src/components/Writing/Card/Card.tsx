import { Link } from 'react-router-dom';

import formatDate from '../../../utilities/format-date';

import styles from './Card.module.scss';

export default function Card(props: any) {
  const post = props.post;
  const formattedDate = formatDate(props.post.published_date);
  return (
    <div className={styles.Card}>
      <Link to={`/writing/${post._id}`}>
        <img src="https://placekitten.com/g/600/300" alt={post.title} />
        <div className={styles.Overlay}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{post.title}</h2>
            <h3 className={styles.date}>{formattedDate}</h3>
            <span>{post.tags}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
