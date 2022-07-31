import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchForm from '../components/Forms/SearchForm.js';
import Comment from '../components/Comments/Comment.js';
import CommentReply from '../components/Comments/CommentReply.js';
import CommentForm from '../components/Comments/CommentForm.js';

export default function Blog(props) {
  const { id } = useParams();

  // const singleBlog = blogData.find((item) => item.name === name);
  const [blogInfo, setblogInfo] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line func-style
    const fetchData = async () => {
      // add "proxy":"http://localhost:8000/" property to package.json to avoid cors issue

      const result = await fetch(`http://localhost:3333/api/post/${id}`);
      const body = await result.json();
      setblogInfo(body);
    };

    fetchData();
  }, [id]);

  function convertDate(date) {
    const newDate = new Date(date);
    const result = newDate.toDateString();
    return result;
  }

  const { author, blogtitle, blogpost, blogimage, comments, category, date } = {
    ...blogInfo,
  };

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <SearchForm />
      </div>
      <div className="row tm-row">
        <div className="col-12">
          <hr className="tm-hr-primary tm-mb-55" />

          {/* <video width="954" height="535" controls className="tm-mb-40">
            <source src="/static/video/wheat-field.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src={blogimage} alt={blogtitle} />
        </div>
      </div>
      <div className="row tm-row">
        <div className="col-lg-8 tm-post-col">
          <div className="tm-post-full">
            <div className="mb-4">
              <h2 className="pt-2 tm-color-primary tm-post-title">
                {blogtitle}
              </h2>
              <p className="tm-mb-40">
                {convertDate(date)} - posted by {author}
              </p>
              <p>{blogpost} </p>
              <p>{category} </p>
              <span className="d-block text-right tm-color-primary">
                {comments}
              </span>
            </div>

            <div>
              <h2 className="tm-color-primary tm-post-title">Comments</h2>
              <hr className="tm-hr-primary tm-mb-45" />
              <Comment />
              <CommentReply />
              <CommentForm />
            </div>
          </div>
        </div>
        <aside className="col-lg-4 tm-aside-col">
          <div className="tm-post-sidebar">
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
            <ul className="tm-mb-75 pl-5 tm-category-list">
              <li>
                <Link to="#" className="tm-color-primary">
                  Visual Designs
                </Link>
              </li>
              <li>
                <Link to="#" className="tm-color-primary">
                  Travel Events
                </Link>
              </li>
              <li>
                <Link to="#" className="tm-color-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="tm-color-primary">
                  Video and Audio
                </Link>
              </li>
              <li>
                <Link to="#" className="tm-color-primary">
                  Etiam auctor ac arcu
                </Link>
              </li>
              <li>
                <Link to="#" className="tm-color-primary">
                  Sed im justo diam
                </Link>
              </li>
            </ul>
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="tm-mb-40 tm-post-title tm-color-primary">
              Related Posts
            </h2>
            <Link to="#" className="d-block tm-mb-40">
              <figure>
                <img
                  src="/static/img/img-02.jpg"
                  alt="Three"
                  className="mb-3 img-fluid"
                />
                <figcaption className="tm-color-primary">
                  Duis mollis diam nec ex viverra scelerisque a sit
                </figcaption>
              </figure>
            </Link>
            <Link to="#" className="d-block tm-mb-40">
              <figure>
                <img
                  src="/static/img/img-05.jpg"
                  alt="four"
                  className="mb-3 img-fluid"
                />
                <figcaption className="tm-color-primary">
                  Integer quis lectus eget justo ullamcorper ullamcorper
                </figcaption>
              </figure>
            </Link>
            <Link to="#" className="d-block tm-mb-40">
              <figure>
                <img
                  src="/static/img/img-06.jpg"
                  alt="five"
                  className="mb-3 img-fluid"
                />
                <figcaption className="tm-color-primary">
                  Nam lobortis nunc sed faucibus commodo
                </figcaption>
              </figure>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
