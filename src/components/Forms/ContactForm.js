import React, { useState } from 'react';

// eslint-disable-next-line func-style
export default function Contact() {
  const [username, setUsername] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubject(e) {
    setSubject(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  // eslint-disable-next-line no-console
  console.log(username, email, subject, message);

  // eslint-disable-next-line func-style
  const submitForm = (e) => {
    e.preventDefault();
    // const formData = new FormData();

    const formData = {
      username,
      email,
      subject,
      message,
    };

    fetch('http://localhost:3333/api/contact', {
      method: 'POST',
      // body: Object.fromEntries(formData),
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
    <form className="mb-5 ml-auto mr-0" onSubmit={submitForm}>
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
              rows="8"
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
