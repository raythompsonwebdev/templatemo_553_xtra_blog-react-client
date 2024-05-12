import BlogArticle from "./BlogArticle";
import { BlogType } from "../../types/index";

function BlogArticles(props: { blogData: BlogType[] }) {
  const { blogData } = props;

  // eslint-disable-next-line no-console
  // console.error(lastIndex);

  const Blog = blogData.map((item: BlogType) => (
    <BlogArticle
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

export default BlogArticles;
