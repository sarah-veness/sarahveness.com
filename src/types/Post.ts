type PostType = {
  readonly _id?: string;
  title: string;
  slug: string;
  author: string;
  content: string;
  tags: string[];
  published_date: string;
  updated_date?: string;
};

interface PostProps {
  post: PostType;
}

export type { PostType, PostProps };
