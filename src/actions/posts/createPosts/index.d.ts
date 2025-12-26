declare module "~root/actions/posts/createPosts" {
  export type Posts = {
    postId: number;
    userId: number;
    content: any;
    imageUrl?: string;
    visibility?: any;
    createdAt?: Date;
  };

  export type CreatePostsArguments = Posts;

  export type CreatePostsResult = { insertedPostId: number };

  const createPosts: (args: CreatePostsArguments) => Promise<CreatePostsResult>;

  export = createPosts;
}
