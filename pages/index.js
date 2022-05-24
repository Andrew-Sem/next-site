import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import Note from "./../components/Notes/Note/Note";
import Loader from "./../components/UI/Loader/Loader";

export default function Home({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  });

  if (!posts) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container">
        {/* <h1>Test page</h1> */}
        {posts.map((post) => (
          <Note title={post.title} body={post.body} key={post.id} />
        ))}
      </div>
    </MainLayout>
  );
}

Home.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    posts,
  };
};
