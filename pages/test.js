import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import Note from "./../components/Notes/Note/Note";

export default function Test({ posts: serverPosts }) {
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
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Test page</h1>
      {posts.map((post) => (
        <Note title={post.title} body={post.body} key={post.id} />
      ))}
    </MainLayout>
  );
}

Test.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    posts,
  };
};
