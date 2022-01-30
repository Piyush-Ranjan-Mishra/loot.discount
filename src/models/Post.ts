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
  error?: string | null ;

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
    this.validate();
  }

  validate() {
    if(!this.userName) {
      this.error = 'Username Required';
    } else if(!this.comment) {
      this.error = 'Comment Required';
    }else {
      this.error = undefined;
    }
    this.validated = this.error === undefined;
    // if(this.validated)
    // console.log('Validate', {validate: this.validated, userName:this.userName, comment: this.comment})
  }
}
