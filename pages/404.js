import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";

export default function Error() {
  return (
    <MainLayout title="Error Page">
      <div className="container">
        <h1>Invalid url</h1>
      </div>
    </MainLayout>
  );
}
