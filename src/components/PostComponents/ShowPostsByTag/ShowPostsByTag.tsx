import { useParams } from 'react-router-dom';
import Card from '../../Card/Card';

import useGetPosts from 'hooks/useGetPosts';

import styles from './show-posts-by-tag.module.scss';

import type { PostType } from 'types/Post';

export default function Writing() {
  const { tag } = useParams();
  const { posts } = useGetPosts();

  const filterPostByTag = () => {
    const filteredPosts = posts.filter((post) => {
      return post.tags.includes(tag!);
    });
    return filteredPosts;
  };

  return (
    <div className={styles.ShowPostsByTagContainer}>
      {filterPostByTag().map((post: PostType, k: number) => {
        return <Card key={k} post={post} />;
      })}
    </div>
  );
}
