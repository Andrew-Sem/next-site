import React, { useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import MyBtn from "./../../UI/MyBtn/MyBtn";
import cl from "./NotesForm.module.css";

export default function NotesForm({ create }) {
  const [note, setNote] = useState({ title: "", body: "" });
  const [titlePlaceholder, setTitlePlaceholder] = useState("Название заметки");
  const [bodyPlaceholder, setBodyPlaceholder] = useState("Описание заметки");

  const addNewNote = (e) => {
    e.preventDefault(); // чтобы страничка не обновлялась
    if (note.title === "" || note.body === "")
      return (
        setTitlePlaceholder("Здесь пусто..."),
        setBodyPlaceholder("Здесь пусто...")
      );
    const newNote = {
      // создаём объект нового поста
      ...note, // разворачиваем объект поста
      id: Date.now(), // и добавляем к нему id
    };
    create(newNote);
    setTitlePlaceholder("Название заметки");
    setBodyPlaceholder("Описание заметки");
    setNote({ title: "", body: "" });
  };

  return (
    <form className={cl.form}>
      <h2 className={cl.form__title}>New note</h2>
      <input
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })} // при изменении значения инпута меняем пост
        type="text"
        placeholder={titlePlaceholder}
      />
      <input
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        type="text"
        placeholder={bodyPlaceholder}
      />
      <MyBtn onClick={addNewNote}>Create</MyBtn>
    </form>
  );
}
