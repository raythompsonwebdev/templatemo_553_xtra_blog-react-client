import { SetStateAction, useState } from "react";

export default function SearchForm() {
  const [searchterm, setSearchTerm] = useState('');

  function handleSearch(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setSearchTerm(e.target.value);
  }

  function submitSearch(e: { preventDefault: () => void }) {
    e.preventDefault();

    const myForm = document.querySelector(".tm-search-form") as HTMLFormElement

    const formData : FormData = new FormData(myForm);
     
    // const formData : FormData = {
    //   searchterm,
    // };

    // eslint-disable-next-line no-console
    console.log(searchterm);

    fetch('http://localhost:3333/api/search', {
      method: 'GET',
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
  }

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
          onChange={handleSearch}
        />
        <button className="tm-search-button" type="submit">
          <i className="fas fa-search tm-search-icon" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
