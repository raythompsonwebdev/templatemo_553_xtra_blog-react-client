import { SetStateAction, useState } from "react";

const Blogform = () => {

  const [blogauthor, setBlogAuthor] = useState('');
  const [blogtitle, setBlogTitle] = useState('');
  const [blogtext, setBlogText] = useState('');
  const [blogimage, setBlogImage] = useState('');
  const [blogcat, setBlogCat] = useState('');
  // add current date
  const currDate = new Date().toISOString().slice(0, 10);
  const [blogdate, setBlogDate] = useState(currDate);

 const handleBlogAuthor = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{ value } = e.target;
    setBlogAuthor(value);
  }

  const handleBlogTitle = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{ value } = e.target;
    setBlogTitle(value);
  }

  const handleBlogText = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{ value } = e.target;
    setBlogText(value);
  }

  const handleBlogImage = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{value } = e.target;
    setBlogImage(value);
  }

  const handleBlogCat = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{value } = e.target;
    setBlogCat(value);
  }

  const handleBlogDate = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    const{value } = e.target;
    setBlogDate(value);
  }

  const submitForm = (e: { preventDefault: () => void }) => {

    e.preventDefault();

    const myForm = document.getElementById("login") as HTMLFormElement;

    const formData : FormData = new FormData(myForm);
    
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
            rows={10}
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


export default Blogform;