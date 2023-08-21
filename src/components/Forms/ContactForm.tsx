import { SetStateAction, useState } from "react";

 
export default function Contact() {
  const [username, setUsername] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleUsername(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    const{value } = e.target;
    setUsername(value);
  }

  function handleEmail(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    const{value } = e.target;
    setEmail(value);
  }

  function handleSubject(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    const{value } = e.target;
    setSubject(value);
  }

  function handleMessage(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    const{value } = e.target;
    setMessage(value);
  }

  // eslint-disable-next-line no-console
  console.log(username, email, subject, message);

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const myForm = document.getElementById("contact-form") as HTMLFormElement;

    const formData : FormData = new FormData(myForm);

    // const formData = {
    //   username,
    //   email,
    //   subject,
    //   message,
    // };

    fetch('http://localhost:3333/api/contact', {
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
      });
  };

  return (
    <form id="contact-form" className="mb-5 ml-auto mr-0" onSubmit={submitForm}>
      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label
            htmlFor="name"
            className="col-sm-12 col-form-label text-left tm-color-primary">
            Name
            <input
              className="form-control mr-0 ml-auto"
              name="name"
              id="name"
              type="text"
              required
              onChange={handleUsername}
            />
          </label>
        </div>
      </div>
      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label
            htmlFor="email"
            className="col-sm-12 col-form-label text-left tm-color-primary">
            Email
            <input
              className="form-control mr-0 ml-auto"
              name="email"
              id="email"
              type="email"
              required
              onChange={handleEmail}
            />
          </label>
        </div>
      </div>
      <div className="form-group row mb-4">
        <div className="col-sm-12">
          <label
            htmlFor="subject"
            className="col-sm-12 col-form-label text-left tm-color-primary">
            Subject
            <input
              className="form-control mr-0 ml-auto"
              name="subject"
              id="subject"
              type="text"
              required
              onChange={handleSubject}
            />
          </label>
        </div>
      </div>
      <div className="form-group row mb-5">
        <div className="col-sm-12">
          <label
            htmlFor="message"
            className="col-sm-12 col-form-label text-left tm-color-primary">
            Message
            <textarea
              className="form-control mr-0 ml-auto"
              name="message"
              id="message"
              rows={8}
              required
              onChange={handleMessage}
            />
          </label>
        </div>
      </div>
      <div className="form-group row text-left">
        <div className="col-12">
          <button className="tm-btn tm-btn-primary tm-btn-small" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
