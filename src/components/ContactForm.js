import React, { useState } from "react";

// eslint-disable-next-line func-style
export default function Contact() {
  const [username, setUsername] = useState(" ");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState("");

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

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${username}, Email: ${email} , this subject ${subject}, this  message ${message}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <form className="mb-5 ml-auto mr-0 tm-contact-form" onSubmit={submit}>                        
    <div className="form-group row mb-4">
        <label htmlFor="name" className="col-sm-3 col-form-label text-right tm-color-primary">Name</label>
        <div className="col-sm-9">
            <input className="form-control mr-0 ml-auto" name="name" id="name" type="text" required onChange={handleUsername}/>                            
        </div>
    </div>
    <div className="form-group row mb-4">
        <label htmlFor="email" className="col-sm-3 col-form-label text-right tm-color-primary">Email</label>
        <div className="col-sm-9">
            <input className="form-control mr-0 ml-auto" name="email" id="email" type="email" required onChange={handleEmail}/>
        </div>
    </div>
    <div className="form-group row mb-4">
        <label htmlFor="subject" className="col-sm-3 col-form-label text-right tm-color-primary">Subject</label>
        <div className="col-sm-9">
            <input className="form-control mr-0 ml-auto" name="subject" id="subject" type="text" required onChange={handleSubject}/>
        </div>
    </div>
    <div className="form-group row mb-5">
        <label htmlFor="message" className="col-sm-3 col-form-label text-right tm-color-primary">Message</label>
        <div className="col-sm-9">
            <textarea className="form-control mr-0 ml-auto" name="message" id="message" rows="8" required onChange={handleMessage}></textarea>                                
        </div>
    </div>
    <div className="form-group row text-right">
        <div className="col-12">
            <button className="tm-btn tm-btn-primary tm-btn-small" type="submit">Submit</button>                        
        </div>                            
    </div>                                
</form>
  );
}
