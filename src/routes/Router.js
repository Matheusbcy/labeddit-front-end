import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Posts from "../pages/Posts";
import PostsComments from "../pages/PostsComments";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/cadastro" element={<Cadastro />} />
        <Route index path="/posts" element={<Posts />} />
        <Route index path="/posts/:id/comentarios" element={<PostsComments />} />
      </Routes>
    </BrowserRouter>
  );
}
