import React from "react";
import { css } from "@emotion/react";
import {
  ButtonComments,
  ContainerCardComments,
  ContainerComments,
  ContainerPostsComments,
  HrComments,
  Spinner,
  TextareaComments,
} from "./postsCommentsStyle";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import CardsComments from "../components/cardComments";
import useProtectedPage from "../ProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../contants/url";
import { BeatLoader } from "react-spinners";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

function PostsComments() {
  useProtectedPage();

  const [postsById, setPostById] = useState([]);
  const [newComments, setNewComments] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
  };

  const onChangeComments = (event) => {
    setNewComments(event.target.value);
  };

  const getPostById = async () => {
    try {
      const postById = await axios.get(`${BASE_URL}/posts?id=${id}`, {
        headers,
      });
      setPostById(postById.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById();
  }, [id]);

  const addComments = async () => {
    try {
      setLoading(true);
      const data = {
        comments: newComments,
      };
      await axios.post(`${BASE_URL}/posts/${id}/comments`, data, {
        headers,
      });
      setNewComments("");
      setLoading(false);
      getPostById();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (postsById.length > 0) {
    return (
      <ContainerPostsComments>
        <Navbar />
        <ContainerCardComments>
          <Cards
            id={postsById[0].id ? postsById[0].id : 0}
            listComments={postsById[0].comments}
            creatorName={postsById[0].creator.name}
            content={postsById[0].content}
            likes={postsById[0].likes}
            dislikes={postsById[0].deslikes}
          />
        </ContainerCardComments>
        <TextareaComments
          name="postComments"
          id="postComments"
          value={newComments}
          placeholder="Adicionar comentário"
          onChange={onChangeComments}
        ></TextareaComments>
        <ButtonComments onClick={addComments}>
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
            <span>Responder</span>
          )}
        </ButtonComments>
        <HrComments />
        <ContainerComments>
          {postsById[0].comments.map((comment, index) => {
            return (
              <CardsComments
                key={index}
                name={comment.name}
                comentario={comment.comments}
                like={comment.like}
                dislikes={comment.deslikes}
              />
            );
          })}
        </ContainerComments>
      </ContainerPostsComments>
    );
  } else {
    return (
      <ContainerPostsComments>
        <Navbar />
        <ContainerCardComments>
          <Spinner />
        </ContainerCardComments>
        <TextareaComments
          name="postComments"
          id="postComments"
          placeholder="Adicionar comentário"
        ></TextareaComments>
        <ButtonComments>Responder</ButtonComments>
        <HrComments />
        <ContainerComments>
        </ContainerComments>
      </ContainerPostsComments>
    );
  }
}

export default PostsComments;
