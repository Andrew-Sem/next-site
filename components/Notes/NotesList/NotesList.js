import React from "react";
import Note from "../Note/Note";

export default function NotesList({ notes }) {
  return (
    <div>
      {notes ? (
        notes.map((note) => (
          <Note title={note.title} body={note.body} key={note.id} />
        ))
      ) : (
        <h1>Заметок нет</h1>
      )}
    </div>
  );
}
