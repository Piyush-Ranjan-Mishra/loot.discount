export type PostType = {
  id: number;
  postCount: number;
  depth: number;
};

export default class Post {
  id: number = 0;
  userName: string = '';
  comment: string = '';
  depth: number = 0;
  validated: boolean = false;

  constructor(props: PostType) {
    this.id = props.id * 10000 + props.postCount + 1;
    this.depth = props.depth + 1;
  }

  setUserName(name: string) {
    this.userName = name;
    this.validate()
  }

  setComment(comment: string) {
    this.comment = comment;
  }

  validate() {
    this.validated = this.userName != null && this.comment != null;
  }
}
