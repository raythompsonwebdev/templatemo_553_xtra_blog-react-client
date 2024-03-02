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
      id={item.id}
      author={item.author}      
      blogtitle={item.blogtitle}
      blogpost={item.blogpost}
      submitted={item.submitted}
      blogimage={item.blogimage} 
      category_id={item.category_id}
      
    />
  ));

  return Blog;
}

export default BlogsnippetContainer;
