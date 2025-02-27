import { v4 } from "uuid";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import { useImmerReducer } from "use-immer";

const initialNotes = [{ id: 0, note: "your note", stat: false }];

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: v4(),
      note: action.note,
      state: false,
    });
  } else if (action.type === "UPDATE_STATE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].state = action.state;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

// function notesReducer(notes, action) {
//   switch (action.type) {
//     case "ADD_NOTE":
//       return [
//         ...notes,
//         {
//           id: v4(),
//           note: action.note,
//           stat: false,
//         },
//       ];
//     case "UPDATE_STATE":
//       return notes.map((note) =>
//         note.id === action.id ? { ...note, stat: !note.stat } : note
//       );
//     case "DELETE_NOTE":
//       return notes.filter((note) => note.id !== action.id);
//     default:
//       return notes;
//   }
// }

export default function NoteApp() {
  const [notes, dispacth] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNotes(note) {
    dispacth({
      type: "ADD_NOTE",
      note: note,
    });
    console.log(notes);
  }

  function hanldeUpdNotes(id) {
    const note = notes.find((n) => n.id === id);
    if (note) {
      dispacth({
        type: "UPDATE_STATE",
        id: id,
        stat: !note.stat, // Kirim nilai state yang baru (dibalik)
      });
    }
  }

  function handleDelNotes(id) {
    dispacth({
      type: "DELETE_NOTE",
      id: id,
    });
  }

  return (
    <div>
      <NoteForm onAddNote={handleAddNotes} />
      <NotesList
        notes={notes}
        markDel={handleDelNotes}
        switchStat={hanldeUpdNotes}
      />
    </div>
  );
}
