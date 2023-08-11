export type Post = {
  _id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  published_date: string;
  updated_date?: string;
};
