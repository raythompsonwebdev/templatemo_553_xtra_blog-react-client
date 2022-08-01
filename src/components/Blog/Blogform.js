import React, { useState } from 'react';

export default function Blogform() {
  const [blogauthor, setBlogAuthor] = useState(' ');
  // const [username, setUsername] = useState(' ');
  const [blogtitle, setBlogTitle] = useState(' ');
  const [blogtext, setBlogText] = useState(' ');
  const [blogimage, setBlogImage] = useState(' ');
  const [blogcat, setBlogCat] = useState(' ');
  // add current date
  const currDate = new Date().toISOString().slice(0, 10);
  const [blogdate, setBlogDate] = useState(currDate);

  function handleBlogAuthor(e) {
    setBlogAuthor(e.target.value);
  }

  // function handleUsername(e) {
  //   setUsername(e.target.value);
  // }

  function handleBlogTitle(e) {
    setBlogTitle(e.target.value);
  }

  function handleBlogText(e) {
    setBlogText(e.target.value);
  }

  function handleBlogImage(e) {
    setBlogImage(e.target.value);
  }

  function handleBlogCat(e) {
    setBlogCat(e.target.value);
  }

  function handleBlogDate(e) {
    setBlogDate(e.target.value);
  }

  function submitForm() {
    // const formData = new FormData();

    const formData = {
      blogauthor,
      blogtitle,
      blogtext,
      blogimage,
      blogcat,
      blogdate,
    };

    // eslint-disable-next-line no-console
    console.log(formData);

    fetch('http://localhost:3333/create-post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // error processing
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);

        // eslint-disable-next-line no-console
        console.error('Fetch Error : ', err.message);
      });
  }

  return (
    <form className="mb-5 ml-auto mr-0 tm-contact-form" onSubmit={submitForm}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-group">
        <label htmlFor="blogauthor">
          Author:&#32;
          <input
            className="form-control"
            type="text"
            name="blogauthor"
            id="blogauthor"
            value={blogauthor}
            onChange={handleBlogAuthor}
            required
          />
        </label>
      </div>

      {/* <div className="form-group">
        <label htmlFor="username">
          Username:&#32;
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </label>
      </div> */}

      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="blogtext">
          <span>Post:&#32;</span>
          <textarea
            value={blogtext}
            onChange={handleBlogText}
            name="blogtext"
            id="blogtext"
            rows="10"
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="blogimage">
          Mood:&#32;
          <input
            className="form-control"
            type="text"
            name="blogimage"
            id="blogimage"
            value={blogimage}
            onChange={handleBlogImage}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="blogcat">
          Mood:&#32;
          <input
            className="form-control"
            type="text"
            name="blogcat"
            id="blogcat"
            value={blogcat}
            onChange={handleBlogCat}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="blogdate">
          Date :
          <input
            className="form-control"
            type="date"
            id="blogdate"
            name="blogdate"
            onChange={handleBlogDate}
            value={blogdate}
          />
        </label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
}
