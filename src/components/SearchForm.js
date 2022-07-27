import React, { useState } from 'react';

// eslint-disable-next-line func-style
export default function SearchForm() {
  const [email, setEmail] = useState(' ');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  // eslint-disable-next-line func-style
  const submitSearch = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Email: ${email}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <div className="col-12">
      <form
        className="form-inline tm-mb-80 tm-search-form"
        onSubmit={submitSearch}>
        <input
          className="form-control tm-search-input"
          name="query"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleEmail}
        />
        <button className="tm-search-button" type="submit">
          <i className="fas fa-search tm-search-icon" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
