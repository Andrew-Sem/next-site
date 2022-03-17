import { useState } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import ModalBtn from "../components/UI/ModalBtn/ModalBtn";
import Modal from "./../components/UI/Modal/Modal";
import NotesList from "../components/Notes/NotesList/NotesList";
import NotesForm from "./../components/Notes/NotesForm/NotesForm";

export default function Features() {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState([
    { title: "1", body: "first note", id: "1" },
    { title: "2", body: "second note", id: "2" },
  ]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModal(false);
  };

  return (
    <MainLayout title="Features Page">
      <div className="container">
        <NotesList notes={notes} />
        <Modal visible={modal} setVisible={setModal}>
          <NotesForm create={createNote} />
        </Modal>
        <ModalBtn onClick={() => setModal(!modal)} />
      </div>
    </MainLayout>
  );
}
