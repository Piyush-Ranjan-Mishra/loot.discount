import { useState } from "react";
import ExistingPost from "../../components/ExistingPost";
import NewPost from "../../components/NewPost";
import Posts from "../../models/Posts";

const HomePage = () => {
  const [posts, setPost] = useState([] as Posts[]);

  const onAddPost = (post: Posts) => {
    console.log("onAddPost", post);
    setPost([...posts, post]);

  };

  console.log("onAddPost", posts);
    

  return (
    <div>
      <NewPost
        id={0}
        depth={0}
        postCount={posts.length}
        onAddPost={onAddPost}
      />
      {posts?.map((post: Posts, index) => (
        <ExistingPost key={index+'0'} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
