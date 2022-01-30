export type PostType = {
  id: number;
  postCount: number;
  depth: number;
};

export default class Post {
  id: number = 0;
  userName: string = "";
  comment: string = "";
  depth: number = 0;
  validated: boolean = false;

  constructor(props?: PostType) {
    if (props) {
      this.id = props.id * 10000 + props.postCount + 1;
      this.depth = props.depth + 1;
    }
  }

  setUserName(name: string) {
    this.userName = name;
    this.validate();
  }

  setComment(comment: string) {
    this.comment = comment;
  }

  validate() {
    this.validated = this.userName != null && this.comment != null;
  }

  toJson() {
    return {
      id: this.id,
      userName: this.userName,
      depth: this.depth,
      comment: this.comment,
    };
  }

  fromJson(json: any) {
    if (json) {
      this.id = json.id;
      this.userName = json.userName;
      this.depth = json.depth;
      this.comment = json.comment;
    }
  }
}
