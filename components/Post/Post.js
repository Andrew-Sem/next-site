import React from "react";
import cl from "./Post.module.css";

export default function Post({ title, body }) {
  return (
    <div className={cl.post}>
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
    </div>
  );
}
