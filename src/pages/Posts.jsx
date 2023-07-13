import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
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
import { BASE_URL } from "../contants/url";
import { BeatLoader } from "react-spinners";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

function Posts() {
  useProtectedPage();
  const [allPosts, setALlPosts] = useState([]);
  const [contentNewPost, setContentNewPost] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
  };

  const getAllPosts = async () => {
    try {
      const posts = await axios.get(`${BASE_URL}/posts`, { headers });
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
      setLoading(true);
      const data = {
        content: contentNewPost,
      };
      await axios.post(`${BASE_URL}/posts`, data, { headers });
      setContentNewPost("");
      setLoading(false);
      getAllPosts();
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
          value={contentNewPost}
          placeholder="Escreva seu post..."
          onChange={onChangeContent}
        ></Textarea>
      </ContainerText>
      <ContainerButtonPostar>
        <ButtonContinue onClick={createPosts}>
          {loading ? (
            <>
              <BeatLoader
                css={override}
                size={10}
                color={"#ffffff"}
                loading={loading}
              />
            </>
          ) : (
            <span>Postar</span>
          )}
        </ButtonContinue>
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
