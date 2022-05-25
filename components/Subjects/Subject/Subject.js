import React from "react";
import cl from "./Subject.module.css";

const Subject = ({ subject }) => {
  return (
    <div className={cl.subject}>
      <div className={cl.left_block}>
        <div className={cl.date}>{subject.date}</div>
        <div className={cl.time}>{subject.time}</div>
      </div>
      <div className={cl.middle_block}>
        <div className={cl.name}>
          <h3>{subject.name}</h3>
        </div>
        <div className={cl.teacher}>{subject.teacher}</div>
      </div>
      <div className={cl.right_block}>
        <div className={cl.classroom}>{subject.classroom}</div>
      </div>
    </div>
  );
};

export default Subject;
