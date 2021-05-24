import React from "react";

const Post = (props) => {
  return (
    <p>
      {props.p.map((elm, i) => {
        return (
          <p>
            <h3>{elm.title}</h3>
            {elm.body}
            <p>{elm.id} </p>
          </p>
        );
      })}
    </p>
  );
};

export default Post;
