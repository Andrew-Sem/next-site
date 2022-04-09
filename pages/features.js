import { useState } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import ModalBtn from "../components/UI/ModalBtn/ModalBtn";
import Modal from "./../components/UI/Modal/Modal";
import NotesList from "../components/Notes/NotesList/NotesList";
import NotesForm from "./../components/Notes/NotesForm/NotesForm";
import useNotes from "../hooks/useNotes";

export default function Features() {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useNotes(setModal);

  return (
    <MainLayout title="Features Page">
      <div className="container">
        <NotesList notes={notes} />
        <Modal visible={modal} setVisible={setModal}>
          <NotesForm create={setNotes} />
        </Modal>
        <ModalBtn visible={!modal} onClick={() => setModal(!modal)} />
      </div>
    </MainLayout>
  );
}
