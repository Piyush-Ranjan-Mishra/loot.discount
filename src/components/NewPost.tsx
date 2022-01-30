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
 let userRef: any, valueRef: any;
const NewPost = ({ id, depth, postCount, onAddPost, post }: NewPostProps) => {
  const [posts, setPosts] = useState(new Posts({ id, depth, postCount, post }));
  const [error, setError] = useState(null as string | null | undefined);
  const [validated, setValidated] = useState(false);
 

  return (
    <form className={depth === 0 ? "New-Post" : "new-reply"}>
      {depth === 0 && <h3>New Post</h3>}
      <label htmlFor="fname">User name:</label>
      <input
        ref={(ref) => (userRef = ref)}
        type="text"
        id="fname"
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
        ref={(ref) => (valueRef = ref)}
        type="text"
        id="comment"
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
          onClick={(e) => {
            e.preventDefault();
            if (posts.post?.validated) {
              onAddPost(posts);
              userRef.value = "";
              valueRef.value = "";
              setPosts(new Posts({ id, depth, postCount }));
            } else {
              setError(posts.post?.error);
            }
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewPost;
