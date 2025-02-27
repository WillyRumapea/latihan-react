import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [note, setNote] = useState("");

  function handleNote(e) {
    setNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddNote(note);
    setNote("");
  }

  return (
    <div>
      <h1>Note App</h1>
      <div>
        <h2>Note Form</h2>
        <form>
          <input
            type="text"
            placeholder="note"
            value={note}
            onChange={handleNote}
          />
          <button onClick={handleSubmit}>add note</button>
        </form>
      </div>
    </div>
  );
}
