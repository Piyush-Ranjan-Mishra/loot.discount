import { useEffect, useState } from "react";
import Post from "../models/Post";
import Posts from "../models/Posts";

type NewPostProps = {
  id: number;
  depth: number;
  postCount: number;
  onAddPost: any;
  post?: Post;
};

const NewPost = ({ id, depth, postCount, onAddPost, post }: NewPostProps) => {
  const [posts, setPosts] = useState(new Posts({ id, depth, postCount, post }));
  const [error, setError] = useState(null as string | null | undefined);
  const [validated, setValidated] = useState(false);
  let userName, comment;

  useEffect(()=> {
    userName = '';
    comment = '@'+ post?.userName;
    if(post) {
      console.log('NewReply', {post, userName, comment});
    }
  }, [post, userName, comment])

  return (
    <div className={depth === 0 ? "New-Post" : "new-reply"}>
      {depth === 0 && <h3>New Post</h3>}
      <label htmlFor="fname">User name:</label>
      <input
        type="text"
        id="fname"
        value={userName}
        placeholder="Name"
        onChange={(event) => {
          posts?.post?.setUserName(event.target.value);
          setPosts(posts);
          if (posts.post && posts.post?.validated !== validated)
            setValidated(posts.post?.validated);
        }}
        required
      />

      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        value={comment}
        placeholder="Write new post .."
        onChange={(event) => {
          posts?.post?.setComment(event.target.value);
          if (posts.post && posts.post?.validated !== validated)
            setValidated(posts.post.validated);
          if (posts.post?.validated) {
            setError(null);
          }
        }}
        required
      />
      <span style={{ color: "red", fontSize: "small" }}>{error}</span>
      <div className="submitContainer">
        <button
          className={validated ? "submit" : ""}
          title="Submit"
          onClick={() => {
            if (posts.post?.validated) {
              onAddPost(posts);
              userName = '';
              comment = '';
              setPosts(new Posts({ id, depth, postCount }));
            } else {
              setError(posts.post?.error);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPost;
