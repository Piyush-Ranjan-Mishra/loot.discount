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

  constructor(props?: NewPostProps) {
    if (props) {
      this.post = new Post({
        id: props.id | 0,
        depth: props.depth | 0,
        postCount: props.postCount | 0,
      });

      if (props.post) {
        this.post.comment = "@" + props.post.userName;
      }
    }
  }

  onAddReply(posts: Posts) {
    this.replies = [...this.replies, posts];
  }

  toJson(): any {
    return {
      post: this.post?.toJson(),
      replies: this.replies.map((el) => el.toJson()),
    };
  }

  fromJson(json: any) {
    this.post = new Post();
    this.post.fromJson(json.post);
    this.replies = json.replies.map((el: any) => {
      const posts = new Post();
      posts.fromJson(el);
    });
  }
}
