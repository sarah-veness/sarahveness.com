import { useAuth0 } from '@auth0/auth0-react';

import ContentEditor from '../ContentEditor/ContentEditor';

import slugify from 'utilities/create-post-slug';
import availableTags from 'utilities/tags';

import type { PostType } from 'types/Post';

import styles from './post-form.module.scss';

interface PostFormProps {
  post: Partial<PostType>;
  setPost: React.Dispatch<React.SetStateAction<Partial<PostType>>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  heading: string;
}

export default function PostForm({
  post,
  setPost,
  onSubmit,
  heading,
}: PostFormProps) {
  const { user } = useAuth0();

  const author = user?.name || 'Anonymous';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let slug = slugify(e.target.value);
    setPost({ ...post, title: e.target.value, slug: slug });
  };

  const onContentChange = (value: string) => {
    setPost({ ...post, content: value });
  };

  const handleTagChange = (tagName: string) => {
    setPost((prevPost) => ({
      ...prevPost,
      tags: prevPost.tags!.includes(tagName)
        ? prevPost.tags!.filter((name) => name !== tagName)
        : [...prevPost.tags!, tagName],
    }));
  };
  return (
    <div className={styles.PostFormContainer}>
      <h2 className={styles.addPost}>{heading}</h2>

      <form noValidate onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.formInput}
            value={post.title}
            onChange={onTitleChange}
          />
          <div className={styles.slug}>/{slugify(post.title!)}</div>
        </div>
        <div>
          <span className={styles.label}>Author</span>
          <span className={styles.author}>{author}</span>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Write</label>
          <ContentEditor
            initialValue={post.content!}
            handleOnChange={onContentChange}
          />
        </div>
        <div className={styles.tagGroup}>
          {availableTags.map((tag, i) => (
            <label htmlFor={tag.name} key={i}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={post.tags!.includes(tag.name)}
                onChange={() => handleTagChange(tag.name)}
                id={tag.name}
              />
              <div>
                <span key={i} className={styles.tagLabel}>
                  # {tag.name.toUpperCase()}
                </span>
              </div>
            </label>
          ))}
        </div>
        {heading === 'Add Post' ? (
          <div className={styles.formGroup}>
            <input
              type="date"
              placeholder="published_date"
              name="published_date"
              value={post.published_date}
              onChange={onChange}
            />
          </div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
