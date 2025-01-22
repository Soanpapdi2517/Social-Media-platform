import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../../../store/postList-store";

const PostList = () => {
  const {postList} = useContext(PostListContext)
  return (
    <div className="post-Container">
      {postList.map((posts)=> <Post key={posts.id} posts={posts}/>)}
    </div>
  );
};

export default PostList;
