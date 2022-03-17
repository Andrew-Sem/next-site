import React from "react";
import cl from "./MyBtn.module.css";

export default function MyBtn({ children, ...props }) {
  return (
    <button className={cl.btn} {...props}>
      {children}
    </button>
  );
}
