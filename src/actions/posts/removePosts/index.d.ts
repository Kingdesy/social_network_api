declare module "~root/actions/posts/removePosts" {
  export type Posts = { postId: number };

  export type RemovePostsArguments = Posts;

  const removePosts: (args: RemovePostsArguments) => Promise<>;

  export = removePosts;
}
