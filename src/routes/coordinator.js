export function gotoCreateAccount(navigate) {
  navigate("/cadastro");
}
export function gotoLogin(navigate) {
  navigate("/");
}
export function gotoPosts(navigate) {
  // const token = localStorage.getItem("token");
  // if (token) {
  //   navigate("/posts");
  // } else {
  //   console.log("Token não encontrado");
  // }
  navigate("/posts");
}

export function goToCommentsPosts(navigate, id) {
  navigate(`/posts/${id}/comentarios`);
}
