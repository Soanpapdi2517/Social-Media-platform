import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});
const ReducerPostList = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const DEFAULT_POST_DATA = [
    {
      id: "1",
      username: "soanpapdi2517",
      body: "Learning react ",
      reactions: Math.round(Math.random() * 100),
      image: "https://cdn.dribbble.com/userupload/18291346/file/original-54275ba6079373f67bf3b888d7f20216.jpg?resize=752x&vertical=center",
      tags: ["Learning", "React", "Bootstrap"],
    },
    {
      id: "2",
      username: "Person 2",
      body: "Going home after vacation",
      reactions: Math.round(Math.random() * 100),
      image: "./Public/image.png",
      tags: ["village", "enjoying", "FirstPost"],
    },
  ];
  const [postList, DispatchPostList] = useReducer(
    ReducerPostList,
    DEFAULT_POST_DATA
  );
  const addPostList = () => {};
  const deletePostList = () => {};

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPostList,
        deletePostList,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
