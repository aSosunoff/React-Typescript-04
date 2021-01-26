import React, { useEffect } from "react";
import Spinner from "../spinner";

import * as I from "./interfaces";

const PostPage: React.FC<I.StateProps & I.DispatchProps & I.OwnProps> = ({
  posts,
  fetchPost,
  loading,
}) => {
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {posts.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
};

export { PostPage };
