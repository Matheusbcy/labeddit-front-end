import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SendPost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/posts");
    }
  }, [navigate]);
};

export default SendPost;