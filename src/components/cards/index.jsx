import React from "react";
import {
  ButtonImg,
  Comments,
  ContainerCard,
  ContainerLikeDeslie,
  ImgLikeDeslie,
  LikeDeslike,
  NumberComments,
  PCard,
  PLike,
  TitleCard,
} from "./style";
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";
import comments from "../../assets/comments.png";
import { goToCommentsPosts } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Cards({ id, creatorName, content, likes, dislikes, listComments }) {
  const navigate = useNavigate();
  const numberComments = listComments.length;
  const [likeOrDislike, setLikeOrDislike] = useState(null);
  
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token,
  };

  const data = {
    like: likeOrDislike,
  };

  const addLikeOrDislike = async () => {
    try {
      if (likeOrDislike !== null) {
        await axios.put(`http://localhost:3003/posts/${id}/like`, data, {
          headers,
        });
      }
    } catch (error) {
      if (error.request.status === 400) {
        alert("Você não pode curtir o proprio post.");
      }
    }
  };

  useEffect(() => {
    addLikeOrDislike();
  }, [likeOrDislike]);

  return (
    <ContainerCard>
      <PCard>Enviado por: {creatorName}</PCard>
      <TitleCard>{content}</TitleCard>
      <ContainerLikeDeslie>
        <LikeDeslike>
          <ButtonImg onClick={() => setLikeOrDislike(true)}>
            {" "}
            <ImgLikeDeslie src={like} alt="botão like" />{" "}
          </ButtonImg>
          <PLike>{dislikes > likes ? 0 : likes - dislikes}</PLike>
          <ButtonImg onClick={() => setLikeOrDislike(false)}>
            {" "}
            <ImgLikeDeslie src={deslike} alt="botão deslike" />{" "}
          </ButtonImg>
        </LikeDeslike>
        <Comments>
          <ButtonImg
            onClick={() => {
              goToCommentsPosts(navigate, id);
            }}
          >
            {" "}
            <img src={comments} alt=""></img>{" "}
          </ButtonImg>
          <NumberComments>{numberComments}</NumberComments>
        </Comments>
      </ContainerLikeDeslie>
    </ContainerCard>
  );
}

export default Cards;
