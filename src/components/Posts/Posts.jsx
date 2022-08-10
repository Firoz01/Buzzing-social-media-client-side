import React from "react";
import "./Posts.css";

import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimeLinePosts } from "../../Action/postAction";
const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id}></Post>;
          })}
    </div>
  );
};

export default Posts;
