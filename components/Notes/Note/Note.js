import React from "react";
import cl from "./Note.module.css";

export default function Note({ title, body }) {
  return (
    <div className={cl.note}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
