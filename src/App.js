import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";

// jsx
const App = () => {
  const post = [
    { userId: 1, id: 101, title: "zarqa", body: "hi hi" },
    { userId: 2, id: 102, title: "amman", body: "hello hello" },
  ];

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState(post);
  let obj = {};

  return (
    <>
      <div>
        <h1>Blog App</h1>
        <Post p={post} />
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
          type="text"
        />
        <input
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder="body"
          type="text"
        />
        <input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          placeholder="userId"
          type="text"
        />
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="id"
          type="text"
        />
        <button
          onClick={() => {
            setPosts([...posts, { userId, id, title, body }]);
          }}
        >
          click me to add
        </button>
      </div>
    </>
  );
};

export default App;
