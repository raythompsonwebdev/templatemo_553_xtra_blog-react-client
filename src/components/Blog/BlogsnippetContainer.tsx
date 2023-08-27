import Blogsnippet from './Blogsnippet.js';
import { BlogType } from '../../types/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlogsnippetContainer(props: { blogData :BlogType[], lastIndex: number}) {
  const { blogData, lastIndex } = props;

  // eslint-disable-next-line no-console
  console.log(lastIndex)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Blog = blogData.map((item :BlogType) => (
    <Blogsnippet
      key={item.id}
      author={item.author}
      blogimage={item.blogimage}
      blogtitle={item.blogtitle}
      blogpost={item.blogpost}
      category_id={item.category_id}
      submitted={item.submitted}
      postId={item.postId}
    />
  ));

  return Blog;
}

export default BlogsnippetContainer;
