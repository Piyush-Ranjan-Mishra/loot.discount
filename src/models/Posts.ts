import Post from "./Post";

type NewPostProps = {
  id: number;
  depth: number;
  postCount: number;
  post?: Post;
};

export default class Posts {
  post: Post | undefined;
  replies: Posts[] = [];

  constructor(props: NewPostProps) {
    this.post = new Post({
      id: props.id | 0,
      depth: props.depth | 0,
      postCount: props.postCount | 0,
    });

    if(props.post) {
        this.post.comment = '@'+props.post.userName;
    }
  }

  onAddReply(posts: Posts) {
      this.replies = [...this.replies, posts];
  }
}