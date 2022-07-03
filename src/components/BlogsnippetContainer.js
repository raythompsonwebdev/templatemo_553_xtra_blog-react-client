import React from "react";
import PropTypes from "prop-types";
import Blogsnippet from "./Blogsnippet.js";

function BlogsnippetContainer(props) {
  const { blogData } = props;
  // eslint-disable-next-line no-console
  const Blog = blogData.map((item) => (
    <Blogsnippet
      key={item.id}
      author={item.author}
      blogimage={item.blogimage}
      blogtitle={item.blogtitle}
      blogpost={item.blogpost}
      category={item.category}
      prodId={item.prodId}
      submitted={item.date}
      comments={item.comments}
    />
  ));

  return Blog;
}

BlogsnippetContainer.defaultProps = {
  blogData: [],
};

BlogsnippetContainer.propTypes = {
  blogData: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      username: PropTypes.string,
      blogtitle: PropTypes.string,
      blogpost: PropTypes.string,
      mood: PropTypes.string,
      prodId: PropTypes.string,
      submitted: PropTypes.string,
    })
  ),
};

export default BlogsnippetContainer;
