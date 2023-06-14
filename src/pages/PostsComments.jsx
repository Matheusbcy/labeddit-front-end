import React from "react";
import {
  ButtonComments,
  ContainerCardComments,
  ContainerComments,
  ContainerPostsComments,
  HrComments,
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
function PostsComments() {
  useProtectedPage();

  const [postsById, setPostById] = useState([]);
  const [newComments, setNewComments] = useState("");

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
      const postById = await axios.get(`http://localhost:3003/posts?id=${id}`, {
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
      const data = {
        comments: newComments,
      };
      await axios.post(`http://localhost:3003/posts/${id}/comments`, data, {
        headers,
      });
      setNewComments("")
      getPostById();
    } catch (error) {}
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
        <ButtonComments onClick={addComments}>Responder</ButtonComments>
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
        <ContainerCardComments>Carregando ...</ContainerCardComments>
        <TextareaComments
          name="postComments"
          id="postComments"
          placeholder="Adicionar comentário"
        ></TextareaComments>
        <ButtonComments>Responder</ButtonComments>
        <HrComments />
        <ContainerComments>
          <CardsComments />
          <CardsComments />
        </ContainerComments>
      </ContainerPostsComments>
    );
  }
}

export default PostsComments;
