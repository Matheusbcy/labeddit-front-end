import React, { useEffect, useState } from "react";
import {
  ContainerButtonPostar,
  ContainerPosts,
  ContainerText,
  HrPosts,
  Textarea,
} from "./pots.style";
import Navbar from "../components/nav";
import { ButtonContinue } from "../components/form/style";
import Cards from "../components/cards";
import useProtectedPage from "../ProtectedPage";
import axios from "axios";

function Posts() {
  useProtectedPage();
  const [allPosts, setALlPosts] = useState([]);
  const [contentNewPost, setContentNewPost] = useState("");

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
  };

  const getAllPosts = async () => {
    try {
      const posts = await axios.get("http://localhost:3003/posts", { headers });
      setALlPosts(posts.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const createPosts = async () => {
    try {
      const data = {
        content: contentNewPost,
      };
      await axios.post("http://localhost:3003/posts", data, { headers });
      getAllPosts()
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeContent = (event) => {
    setContentNewPost(event.target.value);
  };

  return (
    <ContainerPosts>
      <Navbar />
      <ContainerText>
        <Textarea
          name="post"
          id="post"
          placeholder="Escreva seu post..."
          onChange={onChangeContent}
        ></Textarea>
      </ContainerText>
      <ContainerButtonPostar>
        <ButtonContinue onClick={createPosts}>Postar</ButtonContinue>
      </ContainerButtonPostar>
      <HrPosts />
      <div>
        {allPosts.map((post) => {
          return (
            <Cards
              key={post.id}
              id={post.id}
              listComments={post.comments}
              creatorName={post.creator.name}
              content={post.content}
              likes={post.likes}
              dislikes={post.deslikes}
            />
          );
        })}
      </div>
    </ContainerPosts>
  );
}

export default Posts;
