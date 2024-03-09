import { SetStateAction, useState } from "react";

const Blogform = () => {
  const [username, setUserName] = useState("");
  const [author, setBlogAuthor] = useState("");
  const [blogtitle, setBlogTitle] = useState("");
  const [blogpost, setBlogPost] = useState("");
  const [mood, setMood] = useState("");
  const [category_id, setCatId] = useState("");
  const currDate = new Date().toISOString().slice(0, 10);
  const [submitted, setBlogDate] = useState(currDate);

  const blogimage = "image";
  const user_id = "10";

  const handleAuthor = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setBlogAuthor(value);
  };

  const handleUserName = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleBlogTitle = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setBlogTitle(value);
  };

  const handleBlogPost = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setBlogPost(value);
  };

  const handleCatId = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setCatId(value);
  };

  const handleMood = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setMood(value);
  };

  const handleBlogDate = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setBlogDate(value);
  };

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fetch("/api/add_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        username,
        blogtitle,
        blogpost,
        mood,
        submitted,
        blogimage,
        category_id,
        user_id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `registerForm : ${response.status}: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.toString());
      });
  };

  return (
    <form id="addblog-form" className="mb-5 ml-auto mr-0" onSubmit={submitForm}>
      <h1 className="h3 mb-3 fw-normal">Insert Blog Details Here</h1>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="author">
            Author:&#32;
            <input
              className="form-control"
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={handleAuthor}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="username">
            Username:&#32;
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUserName}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="blogtitle">
            Post Title:&#32;
            <input
              className="form-control"
              type="text"
              name="blogtitle"
              id="blogtitle"
              value={blogtitle}
              onChange={handleBlogTitle}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="blogpost">
            <span>Post:&#32;</span>
            <textarea
              value={blogpost}
              onChange={handleBlogPost}
              name="blogpost"
              id="blogpost"
              rows={10}
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="blogcat">
            CategoryID:&#32;
            <input
              className="form-control"
              type="text"
              name="catId"
              id="catId"
              value={category_id}
              onChange={handleCatId}
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="mood">
            Mood:&#32;
            <input
              className="form-control"
              type="text"
              name="mood"
              id="mood"
              value={mood}
              onChange={handleMood}
            />
          </label>
        </div>
      </div>

      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label htmlFor="submitted">
            Date :
            <input
              className="form-control"
              type="date"
              id="submitted"
              name="submitted"
              onChange={handleBlogDate}
              value={submitted}
            />
          </label>
        </div>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Add Blog
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
};

export default Blogform;
