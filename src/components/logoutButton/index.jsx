import { useState } from "react";
import Modal from "react-modal";
import { gotoLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    gotoLogin(navigate);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      <Modal isOpen={showModal}>
        <h2>Você tem certeza que deseja sair?</h2>
        <button onClick={handleConfirmLogout}>Sim</button>
        <button onClick={() => setShowModal(false)}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default LogoutButton;
