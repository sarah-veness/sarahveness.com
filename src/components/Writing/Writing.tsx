import { Link } from 'react-router-dom';

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

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/admin/new-post"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className={styles.CardContainer}>{postList}</div>
      </div>
    </div>
  );
}
