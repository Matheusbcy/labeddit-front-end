import React from "react";
import {
  ButtonImgComments,
  ContainerCardComments,
  ContainerLikeDeslieComments,
  ImgLikeDeslieComments,
  LikeDeslikeComments,
  PCardComments,
  PLikeComments,
  TitleCardComments,
} from "./style";
import deslike from "../../assets/deslike.png";
import imgLike from "../../assets/like.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../contants/url";

function CardsComments({ name, comentario, like, dislikes }) {
  const [likeOrDislike, setLikeOrDislike] = useState(null);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
  };

  const addLikeComments = async () => {
    try {
      const data = {
        comment: comentario,
        like: likeOrDislike,
      };
      await axios.put(`${BASE_URL}/posts/comments/likes`, data, {
        headers,
      });
      addLikeComments();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (likeOrDislike !== null) {
      addLikeComments();
    }
  }, [likeOrDislike]);

  return (
    <ContainerCardComments>
      <PCardComments>Enviado por: {name}</PCardComments>
      <TitleCardComments>{comentario}</TitleCardComments>
      <ContainerLikeDeslieComments>
        <LikeDeslikeComments>
          <ButtonImgComments onClick={() => setLikeOrDislike(true)}>
            <ImgLikeDeslieComments src={imgLike} alt="botão like" />
          </ButtonImgComments>
          <PLikeComments>{dislikes > like ? 0 : like - dislikes}</PLikeComments>
          <ButtonImgComments onClick={() => setLikeOrDislike(false)}>
            <ImgLikeDeslieComments src={deslike} alt="botão deslike" />
          </ButtonImgComments>
        </LikeDeslikeComments>
      </ContainerLikeDeslieComments>
    </ContainerCardComments>
  );
}

export default CardsComments;
