import React from "react";
import Subject from "../Subject/Subject";

const SubjectsList = ({ type }) => {
  const credits = [
    {
      name: "Physical culture",
      teacher: "Musina",
      date: "30.05.2022",
      classroom: "SC-Molodost'",
      time: "11:45",
    },
    {
      name: "Foreign language",
      teacher: "Kryachko",
      date: "31.05.2022",
      classroom: "3-411",
      time: "13:05",
    },
    {
      name: "Operating systems",
      teacher: "Sankov",
      date: "02.06.2022",
      classroom: "A-29",
      time: "14:50",
    },
    {
      name: "OOAaD",
      teacher: "Abramova",
      date: "03.06.2022",
      classroom: "1-302",
      time: "9:35",
    },
    {
      name: "Math soft",
      teacher: "Igumnov",
      date: "03.06.2022",
      classroom: "1-303",
      time: "13:05",
    },
  ];
  const exams = [
    {
      name: "Probability theory",
      teacher: "Mustafina",
      date: "06.06.2022",
      classroom: "3-315",
      time: "13:10",
    },
    {
      name: "Physics",
      teacher: "Surkaev",
      date: "10.06.2022",
      classroom: "3-413",
      time: "11:20",
    },
    {
      name: "Formal language theory",
      teacher: "Rybanov",
      date: "16.06.2022",
      classroom: "1-302",
      time: "13:10",
    },
  ];
  let subjects = [];
  if (type == "exams") subjects = exams;
  if (type == "credits") subjects = credits;

  return (
    <div>
      {subjects.map((subject) => (
        <Subject subject={subject} key={subject.name} />
      ))}
    </div>
  );
};

export default SubjectsList;
