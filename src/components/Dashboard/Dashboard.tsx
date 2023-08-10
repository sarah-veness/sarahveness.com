import { Link } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

import type { Post } from "../../types/Post";

import styles from "./dashboard.module.scss";

export default function Dashboard() {
  let posts = usePosts();

  const postList =
    posts.length === 0
      ? "There are no posts yet!"
      : posts.map((post: Post, k: number) => {
          return (
            <Link to={`/admin/edit-post/${post._id}`}>
              <li key={k}>{post.title}</li>
            </Link>
          );
        });

  return (
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <ul>{postList}</ul>
    </div>
  );
}
