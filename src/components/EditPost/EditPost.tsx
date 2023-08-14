import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import ContentEditor from '../ContentEditor/ContentEditor';

import type { PostType } from '../../types/Post';

import { slugify, availableTags } from '../../utilities';

export default function EditPost() {
  const [post, setPost] = useState<PostType>({
    title: '',
    slug: '',
    content: '',
    tags: [],
    author: '',
    updated_date: '',
    published_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const todaysDate = new Date().toLocaleDateString();

  const handleTagChange = (tagName: string) => {
    setPost((prevPost) => ({
      ...prevPost,
      tags: prevPost.tags.includes(tagName)
        ? prevPost.tags.filter((name) => name !== tagName)
        : [...prevPost.tags, tagName],
    }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          slug: res.data.slug,
          content: res.data.content,
          tags: res.data.tags,
          author: res.data.author,
          updated_date: '',
          published_date: todaysDate,
        });
      })
      .catch((err) => {
        console.log(`Error from EditPost, ${err}`);
      });
  }, [id, todaysDate]);

  const onChange = (e: any) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onContentChange = (value: string) => {
    setPost({ ...post, content: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: post.title,
      slug: slugify(post.title),
      tags: post.tags,
      content: post.content,
      author: post.author,
      updated_date: todaysDate,
    };

    axios
      .put(`http://localhost:3000/api/posts/${id}`, data)
      .then(() => {
        navigate(`/writing/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditPost!', err);
      });
  };

  return (
    <div className="EditPost">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/admin" className="btn btn-outline-warning float-left">
              BACK TO POSTS
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit post</h1>
            <p className="lead text-center">Update post's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the post"
                name="title"
                className="form-control"
                value={post.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={post.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <ContentEditor
                initialValue={post.content}
                handleOnChange={onContentChange}
              />
            </div>
            <br />
            <div className="form-group">
              {availableTags.map((tag, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    checked={post.tags.includes(tag.name)}
                    onChange={() => handleTagChange(tag.name)}
                  />
                  {tag.name}
                </label>
              ))}
            </div>

            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
