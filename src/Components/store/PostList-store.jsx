import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPostList: () => {},
  deletePost: () => {},
});
const ReducerPostList = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload,
      ...currPostList,
    ];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (posts) => posts.id !== action.payload.postId
    );
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const DEFAULT_POST_DATA = [
    {
      id: 1,
      username: "soanpapdi2517",
      body: "Learning react ",
      reactions: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      image:
        "https://cdn.dribbble.com/userupload/18291346/file/original-54275ba6079373f67bf3b888d7f20216.jpg?resize=752x&vertical=center",
      tags: ["Learning", "React", "Bootstrap"],
    },
    {
      id: 2,
      username: "Person 2",
      body: "Going home after vacation",
      reactions: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      image: "./Public/image.png",
      tags: ["village", "enjoying", "FirstPost"],
    },
  ];
  const [postList, DispatchPostList] = useReducer(
    ReducerPostList,
    DEFAULT_POST_DATA
  );
  const addPostList = (
    username,
    body,
    image,
    tags
  ) => {
    DispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        username: username,
        body: body,
        image: image,
        reactions: Math.round(Math.random() * 100),
        comments: Math.round(Math.random() * 100),
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    DispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPostList,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
