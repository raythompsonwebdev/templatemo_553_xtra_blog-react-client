import Blogsnippet from './Blogsnippet.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlogsnippetContainer(props :any) {
  const { blogData } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Blog = blogData.map((item:any) => (
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

export default BlogsnippetContainer;
