import React from 'react';

// eslint-disable-next-line func-style
function CommentReply() {
  return (
    <div className="tm-comment-reply tm-mb-45">
      <hr />
      <div className="tm-comment">
        <figure className="tm-comment-figure">
          <img
            src="/static/img/comment-2.jpg"
            alt="Two"
            className="mb-2 rounded-circle img-thumbnail"
          />
          <figcaption className="tm-color-primary text-center">
            Jewel Soft
          </figcaption>
        </figure>
        <p>
          Nunc et eros quis enim feugiat tincidunt et vitae dui. Nullam
          consectetur justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus
          sapien vel, euismod turpis.
        </p>
      </div>
      <span className="d-block text-right tm-color-primary">June 21, 2020</span>
    </div>
  );
}

export default CommentReply;
