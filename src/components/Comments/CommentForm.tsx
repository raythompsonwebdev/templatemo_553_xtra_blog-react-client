import { SetStateAction, useState } from "react";

function CommentForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // set todays date
  const currDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(currDate);

  function handleUsername(e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) {
    setUsername(e.target.value);
  }

  function handleEmail(e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) {
    setEmail(e.target.value);
  }

  function handleMessage(e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) {
    setMessage(e.target.value);
  }

  function handleDate(e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) {
    setDate(e.target.value);
  }

  const submitComment = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      fetch("/api/comments", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, message, date }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Database Error: ${response.status}: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <form action="" className="mb-6" onSubmit={submitComment}>
      <h2 className="tm-color-primary tm-post-title mb-6">Your comment</h2>
      <div className="mb-4">
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          onChange={handleUsername}
        />
      </div>
      <div className="mb-4">
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          onChange={handleEmail}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="form-control"
          name="message"
          rows={6}
          onChange={handleMessage}
        />
      </div>
      <div className="mb-4">
        <input
          className="form-control"
          type="hidden"
          id="date"
          name="date"
          onChange={handleDate}
          value={date}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="tm-btn tm-btn-primary tm-btn-small">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
