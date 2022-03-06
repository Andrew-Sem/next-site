import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/MainLayout/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout title={"Home Page"}>
      <h1>Home Page</h1>
    </MainLayout>
  );
}
