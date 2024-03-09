import Blogsnippet from "./Blogsnippet.js";
import { BlogType } from "../../types/index";

function BlogsnippetContainer(props: {
  blogData: BlogType[];
  lastIndex: number;
}) {
  const { blogData, lastIndex } = props;

  // eslint-disable-next-line no-console
  console.error(lastIndex);

  const Blog = blogData.map((item: BlogType) => (
    <Blogsnippet
      key={item.id}
      id={item.id}
      author={item.author}
      username={item.username}
      blogtitle={item.blogtitle}
      blogpost={item.blogpost}
      mood={item.mood}
      submitted={item.submitted}
      blogimage={item.blogimage}
      category_id={item.category_id}
      user_id={item.user_id}
    />
  ));

  return Blog;
}

export default BlogsnippetContainer;
