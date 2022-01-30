import { useState } from "react";
import Posts from "../models/Posts";
import NewPost from "./NewPost";
import Reply from "./Reply";

type ExistingPostProps = {
  post: Posts;
};

const ExistingPost = ({ post }: ExistingPostProps) => {
  const [isReply, setIsReply] = useState(false);

  const onAddPost = (newPost: Posts) => {
    post.onAddReply(newPost);
    setIsReply(!isReply);
    console.log("onAddPost", post);
  };

  return post ? (
    <div className={post.post?.depth === 1 ? "original-post" : "reply-post"}>
      <h4>{post.post?.userName}</h4>
      {post.post?.comment}
      {post.post && post.post?.depth < 3 && (
        <Reply onClick={() => setIsReply(!isReply)} />
      )}
      {post.replies?.map((el: Posts, index) => (
        <ExistingPost post={el} key={post.post?.id + "" + index} />
      ))}
      {isReply && post.post && (
        <NewPost
          id={post.post?.id}
          depth={post.post?.depth}
          postCount={post.replies.length}
          onAddPost={onAddPost}
          post={post.post}
        />
      )}
    </div>
  ) : (
    <></>
  );
};

export default ExistingPost;
