import React from "react";
import SubjectsList from "../components/Subjects/SubjectsList/SubjectsList";
import MainLayout from "./../components/MainLayout/MainLayout";

const Exams = () => {
  return (
    <MainLayout title="Exams">
      <div className="container">
        <SubjectsList type="exams" />
      </div>
    </MainLayout>
  );
};

export default Exams;
