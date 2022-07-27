import React from 'react';
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Blogsnippet(props) {
  const {
    // id,
    author,
    blogimage,
    blogtitle,
    blogpost,
    category,
    comments,
    prodId,
    date,
  } = {
    ...props,
  };

  function convertDate(inputDate) {
    const newDate = new Date(inputDate);
    const result = newDate.toDateString();
    return result;
  }

  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link
        to={`/post/${prodId}`}
        className="effect-lily tm-post-link tm-pt-60">
        <div className="tm-post-link-inner">
          <img src={`${blogimage}`} alt="One" className="img-fluid" />
        </div>
        <span className="position-absolute tm-new-badge">New</span>
        <h2 className="tm-pt-30 tm-color-primary tm-post-title">{blogtitle}</h2>
      </Link>

      <p className="tm-pt-30">{blogpost}</p>
      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">{category}</span>
        <span className="tm-color-primary">{convertDate(date)}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <span>{comments} comments</span>
        <span>by {author}</span>
      </div>
    </article>
  );
}

Blogsnippet.defaultProps = {
  author: 'author not found',
  username: 'user not found ',
  blogtitle: 'not found',
  blogpost: 'not found',
  mood: 'not found',
  prodId: 1,
  submitted: 'not found',
};

export default Blogsnippet;
