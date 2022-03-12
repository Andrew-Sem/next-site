import MainLayout from "../components/MainLayout/MainLayout";
import ModalBtn from "../components/UI/ModalBtn/ModalBtn";
import { useState } from "react";
import Modal from "./../components/UI/Modal/Modal";

export default function Features() {
  const [modal, setModal] = useState(false);

  return (
    <MainLayout title="Features Page">
      <div className="container">
        <Modal visible={modal} setVisible={setModal}>
          <h1>Im Modal</h1>
        </Modal>
        <ModalBtn onClick={() => setModal(!modal)} />
      </div>
    </MainLayout>
  );
}
