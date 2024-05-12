import { SetStateAction, useState } from "react";

export default function SearchForm() {
  const [searchterm, setSearchTerm] = useState("");

  const handleSearch = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const submitSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      fetch(`/api/search?query=${searchterm}`, {
        method: "GET",
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
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className="col-12">
      <form
        className="form-inline tm-mb-80 tm-search-form"
        onSubmit={submitSearch}
      >
        <input
          className="form-control tm-search-input"
          name="query"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleSearch}
        />
        <button className="tm-search-button" type="submit">
          <i className="fas fa-search tm-search-icon" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
