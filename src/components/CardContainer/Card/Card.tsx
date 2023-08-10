import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

export default function Card(props: any) {
  const post = props.post;
  return (
    <div className={styles.Card}>
      <Link to={`/post/${post._id}`}>
        <img
          src="https://placekitten.com/g/500/500"
          alt="this is where alt text will go"
        />
        <div className={styles.Overlay}>
          <div className={styles.textContainer}>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <div>{post.content}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
