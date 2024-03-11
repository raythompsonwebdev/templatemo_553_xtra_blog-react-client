import { Link } from "react-router-dom";
import { CommentType } from "../../types/index";
import { convertDate } from "../../helper";

function Comment(props: { comment: CommentType }) {
  const { comment } = props;

  const { id, username, email, message, date } = comment;

  return (
    <div className="tm-comment tm-mb-45">
      <figure className="tm-comment-figure">
        <img
          src="/images/comment-1.jpg"
          alt="One"
          className="mb-2 rounded-circle img-thumbnail"
        />
        <figcaption className="tm-color-primary text-center">
          {username} ID: {id}
        </figcaption>
      </figure>
      <div>
        <p>{message}</p>
        <p>{email}</p>
        <div className="d-flex justify-content-between">
          <Link to="#" className="tm-color-primary">
            REPLY
          </Link>
          <span className="tm-color-primary">{convertDate(date)}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
