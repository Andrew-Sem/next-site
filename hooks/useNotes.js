import { useState, useEffect } from "react";

const useNotes = (setModal) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("notes"))
      setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModal(false);
  };
  return [notes, createNote];
};

export default useNotes;
