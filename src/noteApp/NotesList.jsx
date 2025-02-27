export default function NotesList({ notes, markDel, switchStat }) {
  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <input
                type="checkbox"
                checked={Boolean(note.state)}
                onChange={() => switchStat(note.id)}
              />
              {note.note}
              <button onClick={() => markDel(note.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
