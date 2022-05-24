import React from "react";
import cl from "./Note.module.css";

export default function Note({ title, body }) {
  return (
    <div className={cl.note}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
