import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../components/Forms/SearchForm";
import Comment from "../components/Comments/Comment";
import CommentReply from "../components/Comments/CommentReply";
import CommentForm from "../components/Comments/CommentForm";
import { BlogType, CommentType } from "../types/index";
import { convertDate } from "../util/helper";

const Blog = () => {
  const { id } = useParams();

  const [blogInfo, setblogInfo] = useState([]);
  const [commentsInfo, setCommentsInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/post/${id}`);
      const commentsResult = await fetch(`/api/comments`);
      const body = await result.json();
      const commentbody = await commentsResult.json();
      setblogInfo(body);
      setCommentsInfo(commentbody);
    };

    fetchData();
  }, [id]);

  const commentresult: CommentType[] = commentsInfo;
  const blogresult: BlogType = blogInfo[0];

  return (
    blogresult && (
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
            <img
              src={`/post/${blogresult.blogimage ? blogresult.blogimage : ""}`}
              alt={blogresult.blogtitle}
              width={950}
            />
          </div>
        </div>
        <div className="row tm-row">
          <div className="col-lg-8 tm-post-col">
            <div className="tm-post-full">
              <div className="mb-4">
                <h2 className="pt-2 tm-color-primary tm-post-title">
                  {blogresult.blogtitle}
                </h2>
                <p className="tm-mb-40">
                  {convertDate(blogresult.submitted)} - posted by{" "}
                  {blogresult.author}
                </p>
                <p>{blogresult.blogpost} </p>
                <p>{blogresult.category_id} </p>
                <span className="d-block text-right tm-color-primary">
                  {/* {comments} */}
                </span>
              </div>

              <div>
                <h2 className="tm-color-primary tm-post-title">Comments</h2>
                <hr className="tm-hr-primary tm-mb-45" />
                {commentresult.map((comment) => (
                  <Comment comment={comment} key={comment.id} />
                ))}

                <CommentReply />
                <CommentForm />
              </div>
            </div>
          </div>
          <aside className="col-lg-4 tm-aside-col">
            <div className="tm-post-sidebar">
              <hr className="mb-3 tm-hr-primary" />
              <h2 className="mb-4 tm-post-title tm-color-primary">
                Categories
              </h2>
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
              <Link to="/post/2" className="d-block tm-mb-40">
                <figure>
                  <img
                    src="/images/img-02.jpg"
                    alt="Three"
                    className="mb-3 img-fluid"
                  />
                  <figcaption className="tm-color-primary">
                    Duis mollis diam nec ex viverra scelerisque a sit
                  </figcaption>
                </figure>
              </Link>
              <Link to="/post/7" className="d-block tm-mb-40">
                <figure>
                  <img
                    src="/images/img-05.jpg"
                    alt="four"
                    className="mb-3 img-fluid"
                  />
                  <figcaption className="tm-color-primary">
                    Integer quis lectus eget justo ullamcorper ullamcorper
                  </figcaption>
                </figure>
              </Link>
              <Link to="/post/8" className="d-block tm-mb-40">
                <figure>
                  <img
                    src="/images/img-06.jpg"
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
    )
  );
};

export default Blog;
