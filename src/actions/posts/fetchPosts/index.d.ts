declare module "~root/actions/posts/fetchPosts" {
  export type Posts = {
    userId: number;
    content: any;
    imageUrl: string | null;
    visibility: any | null;
    createdAt: Date | null;
  };

  export type FetchPostsResult = {
    posts: Posts[];
  };

  export type FetchPostsArguments = { postId: number };

  const fetchPosts: (args: FetchPostsArguments) => Promise<FetchPostsResult>;

  export = fetchPosts;
}
