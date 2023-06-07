import React from 'react'
import { ButtonImgComments, ContainerCardComments, ContainerLikeDeslieComments, ImgLikeDeslieComments, LikeDeslikeComments, PCardComments, PLikeComments, TitleCardComments } from './style'
import like from "../../assets/like.png"
import deslike from "../../assets/deslike.png"

function CardsComments({name, comentario}) {
  return (
    <ContainerCardComments>
    <PCardComments>Enviado por: {name}</PCardComments>
    <TitleCardComments>{comentario}</TitleCardComments>
    <ContainerLikeDeslieComments>
        {/* <LikeDeslikeComments>
            <ButtonImgComments> <ImgLikeDeslieComments src={like} alt="botão like" /> </ButtonImgComments>
            <PLikeComments>1.2k</PLikeComments>
            <ButtonImgComments> <ImgLikeDeslieComments src={deslike} alt="botão deslike" /> </ButtonImgComments>
        </LikeDeslikeComments> */}
    </ContainerLikeDeslieComments>
</ContainerCardComments>
  )
}

export default CardsComments