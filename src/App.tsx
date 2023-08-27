import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogsnippetContainer from './components/Blog/BlogsnippetContainer';
import SearchForm from './components/Forms/SearchForm';
import { BlogType } from './types/index'

// eslint-disable-next-line func-style
const App = () => {
 
  const [blogData, setblogData] = useState<BlogType[]>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = fetch(`http://localhost:3333/api/posts`);
    fetchProducts
      .then((response) => {
        if (!response.ok) {
          throw new Error('no data provided');
        }
        return response.json();
      })
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const returnedData = data.map((blog :any, index:number) => {
          // eslint-disable-next-line no-console
          console.log(index)
          const { id } = blog;
          // eslint-disable-next-line no-param-reassign
          blog.postId = id;
          setLastIndex(blog.postId);
          return blog;
        });

        setblogData(returnedData);
      });
  }, []);

  // eslint-disable-next-line no-console
  // console.log(blogData);

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <SearchForm />
      </div>
      <br />
      <div className="row tm-row">
        <BlogsnippetContainer blogData={blogData} lastIndex={lastIndex} />
      </div>

      <div className="row tm-row tm-mt-100 tm-mb-75">
        <div className="tm-prev-next-wrapper">
          <Link
            to="#"
            className="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20">
            Prev
          </Link>
          <Link to="#" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
            Next
          </Link>
        </div>
        <div className="tm-paging-wrapper">
          <span className="d-inline-block mr-3">Page</span>
          <nav className="tm-paging-nav d-inline-block">
            <ul>
              <li className="tm-paging-item active">
                <Link to="#" className="mb-2 tm-btn tm-paging-link">
                  1
                </Link>
              </li>
              <li className="tm-paging-item">
                <Link to="#" className="mb-2 tm-btn tm-paging-link">
                  2
                </Link>
              </li>
              <li className="tm-paging-item">
                <Link to="#" className="mb-2 tm-btn tm-paging-link">
                  3
                </Link>
              </li>
              <li className="tm-paging-item">
                <Link to="#" className="mb-2 tm-btn tm-paging-link">
                  4
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default App;
