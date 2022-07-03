import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm.js";

export default function Blog() {
  const { id } = useParams();

  // const singleBlog = blogData.find((item) => item.name === name);
  const [blogInfo, setblogInfo] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line func-style
    const fetchData = async () => {
      // add "proxy":"http://localhost:8000/" property to package.json to avoid cors issue

      const result = await fetch(`/api/posts/${id}`);
      const body = await result.json();
      setblogInfo(body);
    };

    fetchData();
  }, [id]);
 

  const{author, blogtitle, blogpost, blogimage,comments,category,date } = {...blogInfo}

  return (
    <main class="tm-main">      
      <div className="row tm-row">
        <SearchForm />               
      </div>            
      <div className="row tm-row">
          <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55" />
              {/* <video width="954" height="535" controls className="tm-mb-40">
                  <source src="video/wheat-field.mp4" type="video/mp4" />							  
                  Your browser does not support the video tag.
              </video> */}
              <img src={blogimage} alt="pin" />
          </div>
      </div>
      <div className="row tm-row">
          <div className="col-lg-8 tm-post-col">
              <div className="tm-post-full">                    
                  <div className="mb-4">
                      <h2 className="pt-2 tm-color-primary tm-post-title">{blogtitle}</h2>
                      <p className="tm-mb-40">{submitted} posted by {author}</p>
                      <p>
                      {blogpost} </p>
                      <p>
                      {blogpost}
                      </p>
                      <span className="d-block text-right tm-color-primary">{comments}</span>
                  </div>
                  

                  <div>
                      <h2 className="tm-color-primary tm-post-title">Comments</h2>
                      <hr className="tm-hr-primary tm-mb-45" />
                      <div className="tm-comment tm-mb-45">
                          <figure className="tm-comment-figure">
                              <img src="img/comment-1.jpg" alt="Image" className="mb-2 rounded-circle img-thumbnail" />
                              <figcaption className="tm-color-primary text-center">Mark Sonny</figcaption>
                          </figure>
                          <div>
                              <p>
                                  Praesent aliquam ex vel lectus ornare tritique. Nunc et eros
                                  quis enim feugiat tincidunt et vitae dui. Nullam consectetur
                                  justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus 
                                  sapien vel, euismod turpis.
                              </p>
                              <div className="d-flex justify-content-between">
                                  <Link to="#" className="tm-color-primary">REPLY</Link>
                                  <span className="tm-color-primary">June 14, 2020</span>
                              </div>                                                 
                          </div>                                
                      </div>
                      <div className="tm-comment-reply tm-mb-45">
                          <hr />
                          <div className="tm-comment">
                              <figure className="tm-comment-figure">
                                  <img src="img/comment-2.jpg" alt="Image" className="mb-2 rounded-circle img-thumbnail" />
                                  <figcaption className="tm-color-primary text-center">Jewel Soft</figcaption>    
                              </figure>
                              <p>
                                  Nunc et eros quis enim feugiat tincidunt et vitae dui.
                                  Nullam consectetur justo ac ex laoreet rhoncus. Nunc
                                  id leo pretium, faucibus sapien vel, euismod turpis.
                              </p>
                          </div>                                
                          <span className="d-block text-right tm-color-primary">June 21, 2020</span>
                      </div>
                      <form action="" className="mb-5 tm-comment-form">
                          <h2 className="tm-color-primary tm-post-title mb-4">Your comment</h2>
                          <div className="mb-4">
                              <input className="form-control" name="name" type="text" />
                          </div>
                          <div className="mb-4">
                              <input className="form-control" name="email" type="text" />
                          </div>
                          <div className="mb-4">
                              <textarea className="form-control" name="message" rows="6"></textarea>
                          </div>
                          <div className="text-right">
                              <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>                        
                          </div>                                
                      </form>                          
                  </div>
              </div>
          </div>
          <aside className="col-lg-4 tm-aside-col">
              <div className="tm-post-sidebar">
                  <hr className="mb-3 tm-hr-primary" />
                  <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
                  <ul className="tm-mb-75 pl-5 tm-category-list">
                      <li><Link to="#" className="tm-color-primary">Visual Designs</Link></li>
                      <li><Link to="#" className="tm-color-primary">Travel Events</Link></li>
                      <li><Link to="#" className="tm-color-primary">Web Development</Link></li>
                      <li><Link to="#" className="tm-color-primary">Video and Audio</Link></li>
                      <li><Link to="#" className="tm-color-primary">Etiam auctor ac arcu</Link></li>
                      <li><Link to="#" className="tm-color-primary">Sed im justo diam</Link></li>
                  </ul>
                  <hr className="mb-3 tm-hr-primary" />
                  <h2 className="tm-mb-40 tm-post-title tm-color-primary">Related Posts</h2>
                  <Link to="#" className="d-block tm-mb-40">
                      <figure>
                          <img src="img/img-02.jpg" alt="Image" className="mb-3 img-fluid" /> 
                          <figcaption className="tm-color-primary">Duis mollis diam nec ex viverra scelerisque a sit</figcaption>
                      </figure>
                  </Link>
                  <Link to="#" className="d-block tm-mb-40">
                      <figure>
                          <img src="./static/img/img-05.jpg" alt="Image" className="mb-3 img-fluid" />
                          <figcaption className="tm-color-primary">Integer quis lectus eget justo ullamcorper ullamcorper</figcaption>
                      </figure>
                  </Link>
                  <Link to="#" className="d-block tm-mb-40">
                      <figure>
                          <img src="img/img-06.jpg" alt="Image" className="mb-3 img-fluid" />
                          <figcaption className="tm-color-primary">Nam lobortis nunc sed faucibus commodo</figcaption>
                      </figure>
                  </Link>
              </div>                    
          </aside>
      </div>
    </main>
  );
}
