declare module "~root/actions/posts/modifyPosts" {
  export type Posts = {
    postId: number;
    userId?: number;
    content?: any;
    imageUrl?: string;
    visibility?: any;
    createdAt?: Date;
  };

  export type ModifyPostsArguments = Posts;

  const modifyPosts: (args: ModifyPostsArguments) => Promise<>;

  export = modifyPosts;
}
