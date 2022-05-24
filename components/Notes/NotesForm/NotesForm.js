import React, { useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import MyBtn from "./../../UI/MyBtn/MyBtn";
import cl from "./NotesForm.module.css";

export default function NotesForm({ create }) {
  const [note, setNote] = useState({ title: "", body: "" });
  const [titlePlaceholder, setTitlePlaceholder] = useState("Title");
  const [bodyPlaceholder, setBodyPlaceholder] = useState("Desription");

  const addNewNote = (e) => {
    e.preventDefault(); // чтобы страничка не обновлялась
    if (note.title === "" || note.body === "")
      return (
        setTitlePlaceholder("It's empty here..."),
        setBodyPlaceholder("It's empty here...")
      );
    const newNote = {
      // создаём объект нового поста
      ...note, // разворачиваем объект поста
      id: Date.now(), // и добавляем к нему id
    };
    create(newNote);
    setTitlePlaceholder("Title");
    setBodyPlaceholder("Desription");
    setNote({ title: "", body: "" });
  };

  return (
    <form className={cl.form}>
      <h2 className={cl.form__title}>New note</h2>
      <MyInput
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })} // при изменении значения инпута меняем пост
        type="text"
        placeholder={titlePlaceholder}
      />
      <MyInput
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        type="text"
        placeholder={bodyPlaceholder}
      />
      <MyBtn onClick={addNewNote}>Create</MyBtn>
    </form>
  );
}
