import { useState } from "react";
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
  const [validated, setValidated] = useState(false);

  return (
    <div className={depth === 0 ? "New-Post" : "new-reply"}>
      {depth === 0 && <h3>New Post</h3>}
      <label htmlFor="fname">User name:</label>
      <input
        type="text"
        id="fname"
        placeholder="Name"
        onChange={(event) => {
          posts?.post?.setUserName(event.target.value);
          setPosts(posts);
          if (posts.post && posts.post?.validated !== validated)
            setValidated(posts.post?.validated);
        }}
      />
      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        placeholder="Write new post .."
        onChange={(event) => {
          posts?.post?.setComment(event.target.value);
          if (posts.post && posts.post?.validated !== validated)
            setValidated(posts.post.validated);
        }}
      />
      <div className="submitContainer">
        <button
          className={validated ? "submit" : ""}
          title="Submit"
          onClick={() => {
            onAddPost(posts);
            setPosts(new Posts({ id, depth, postCount }));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPost;
