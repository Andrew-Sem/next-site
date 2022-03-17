import React from "react";
import Note from "../Note/Note";

export default function NotesList({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <Note title={note.title} key={note.id} />
      ))}
    </div>
  );
}
