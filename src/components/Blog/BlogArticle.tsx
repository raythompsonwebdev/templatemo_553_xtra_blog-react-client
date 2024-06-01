import { Link } from "react-router-dom";
import { BlogType } from "../../types/index";
import { convertDate } from "../../util/helper";

const BlogArticle = (props: BlogType) => {
  const {
    id,
    author,
    username,
    blogtitle,
    blogpost,
    blogimage,
    submitted,
    category_id,
    user_id,
  } = {
    ...props,
  };

  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link to={`/post/${id}`} className="effect-lily tm-post-link tm-pt-60">
        <div className="tm-post-link-inner">
          <img src={`${blogimage}`} alt="One" className="img-fluid" />
        </div>
        <span className="position-absolute tm-new-badge">New</span>
        <h2 className="tm-pt-30 tm-color-primary tm-post-title">{blogtitle}</h2>
      </Link>

      <p className="tm-pt-30">{blogpost}</p>
      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">{category_id}</span>
        <span className="tm-color-primary">{convertDate(submitted)}</span>
        <span className="tm-color-primary">{user_id}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        {/* <span>{comments} comments</span> */}
        <span>by {author}</span>
        <span>{username}</span>
      </div>
    </article>
  );
};

export default BlogArticle;
