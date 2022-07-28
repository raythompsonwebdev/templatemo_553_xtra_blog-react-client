import React from 'react';
import PropTypes from 'prop-types';
import Blogsnippet from './Blogsnippet';

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
      date={item.date}
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
      key: PropTypes.string,
      author: PropTypes.string,
      blogimage: PropTypes.string,
      blogtitle: PropTypes.string,
      blogpost: PropTypes.string,
      category: PropTypes.string,
      prodId: PropTypes.string,
      date: PropTypes.string,
      comments: PropTypes.string,
    })
  ),
};

export default BlogsnippetContainer;
