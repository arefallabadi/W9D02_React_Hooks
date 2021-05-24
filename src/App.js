import React, { useState, useEffect } from "react";
import Post from "./components/Post";
// jsx
const App = () => {
  const post = [
    { userId: 1, id: 101, title: "zarqa", body: "hi hi" },
    { userId: 2, id: 102, title: "amman", body: "hello hello" },
  ];
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState(post);
  let obj = {}
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
        <button onClick={() => {
           obj.title = title
           obj.body = body
            obj.userId = userId
            obj.id = id
         post.push(obj)
         console.log(obj);
         setPosts(post) 
        }}>click me</button>
      </div>
    </>
  );
};

export default App;
