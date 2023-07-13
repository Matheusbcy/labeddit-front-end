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
import likeImg from "../../assets/like.png";
import deslikeImg from "../../assets/deslike.png";
import comments from "../../assets/comments.png";
import { goToCommentsPosts } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../contants/url";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Cards({ id, creatorName, content, likes, dislikes, listComments }) {
  const navigate = useNavigate();
  const numberComments = listComments.length;
  const [likeOrDislike, setLikeOrDislike] = useState(null);
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
        await axios.put(`${BASE_URL}/posts/${id}/like`, data, {
          headers,
        });
      }
    } catch (error) {
      if (error.request.status === 400) {
        setOpenSnackbar(true);
      }
    }
  };

  useEffect(() => {
    addLikeOrDislike();
  }, [likeOrDislike]);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContainerCard>
      <PCard>Enviado por: {creatorName}</PCard>
      <TitleCard>{content}</TitleCard>
      <ContainerLikeDeslie>
        <LikeDeslike>
          <ButtonImg onClick={() => setLikeOrDislike(true)}>
            {" "}
            <ImgLikeDeslie src={likeImg} alt="botão like" />{" "}
          </ButtonImg>
          <PLike>{dislike > like ? 0 : like - dislike}</PLike>
          <ButtonImg onClick={() => setLikeOrDislike(false)}>
            {" "}
            <ImgLikeDeslie src={deslikeImg} alt="botão deslike" />{" "}
          </ButtonImg>
        </LikeDeslike>
        <Comments>
          <ButtonImg
            onClick={() => {
              goToCommentsPosts(navigate, id);
            }}
          >
            {" "}
            <img src={comments} alt="icone comentarios"></img>{" "}
          </ButtonImg>
          <NumberComments>{numberComments}</NumberComments>
        </Comments>
      </ContainerLikeDeslie>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">Você não pode curtir seu proprio post!</Alert>
      </Snackbar>
    </ContainerCard>
  );
}

export default Cards;
