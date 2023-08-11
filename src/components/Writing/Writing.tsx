import Card from './Card/Card';
import styles from './card-container.module.scss';

import usePosts from '../../hooks/usePosts';

export default function Writing() {
  const posts = usePosts();

  const postList =
    posts.length === 0
      ? 'There are no posts yet!'
      : posts.map((post: any, k: any) => {
          return <Card key={k} post={post} />;
        });

  return <div className={styles.CardContainer}>{postList}</div>;
}
