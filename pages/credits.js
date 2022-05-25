import React from "react";
import SubjectsList from "../components/Subjects/SubjectsList/SubjectsList";
import MainLayout from "./../components/MainLayout/MainLayout";

const Exams = () => {
  return (
    <MainLayout title="Credits">
      <div className="container">
        <SubjectsList type="credits" />
      </div>
    </MainLayout>
  );
};

export default Exams;
