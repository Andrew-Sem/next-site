import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import Note from "./../components/Notes/Note/Note";

export default function Test({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  return (
    <MainLayout>
      <div className="container">
        <h1>Test page</h1>
        {posts.map((post) => (
          <Note title={post.title} body={post.body} key={post.id} />
        ))}
      </div>
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
