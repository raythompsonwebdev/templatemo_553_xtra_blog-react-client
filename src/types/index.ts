export interface BlogType {
  id: number;
  author: string;
  username: string;
  blogtitle: string;
  blogpost: string;
  mood: string | null;
  blogimage: string;
  submitted: string;
  category_id: number;
  user_id: number;
}

export interface CommentType {
  id: number;
  username: string;
  email: string;
  message: string;
  date: string;
}
