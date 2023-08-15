import Card from '../Card/Card';
import styles from './card-container.module.scss';

import useGetPosts from '../../hooks/useGetPosts';

export default function Writing() {
  const { posts } = useGetPosts();

  const postList =
    posts.length === 0
      ? 'There are no posts yet!'
      : posts.map((post: any, k: any) => {
          return <Card key={k} post={post} />;
        });

  return <div className={styles.CardContainer}>{postList}</div>;
}
