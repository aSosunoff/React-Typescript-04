import React, { useEffect } from "react";
import Spinner from "../spinner";

import * as I from "./interfaces";

const PostPage: React.FC<I.StateProps & I.DispatchProps & I.OwnProps> = ({
  posts,
  fetchPost,
  loading,
  error,
}) => {
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <>{error}</>;
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
