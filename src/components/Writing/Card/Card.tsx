import { Link } from 'react-router-dom';

import useFormattedDate from '../../../hooks/useFormattedDate';

import styles from './Card.module.scss';

export default function Card(props: any) {
  const post = props.post;
  const formattedDate = useFormattedDate(props.post.published_date);
  return (
    <div className={styles.Card}>
      <Link to={`/post/${post._id}`}>
        <img src="https://placekitten.com/g/500/500" alt={post.title} />
        <div className={styles.Overlay}>
          <div className={styles.textContainer}>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <h3>{formattedDate}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
