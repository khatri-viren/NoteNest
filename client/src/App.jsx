import "./App.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import { useEffect, useState } from "react";

const serverURL = "https://note-nest-server.vercel.app/";
// const serverURL = "http://localhost:4000/";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(serverURL + "api/notes");
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error("Failed to fetch notes");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    try {
      const response = await fetch(serverURL + "api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        const addedNote = await response.json();
        setNotes((prevNotes) => [addedNote, ...prevNotes]);
      } else {
        console.error("Failed to add a new note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateNote = async (id, editedTitle, editedContent) => {
    try {
      const response = await fetch(serverURL + `api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
        }),
      });

      if (response.ok) {
        const updatedNote = await response.json();
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note._id === id ? updatedNote : note))
        );
      } else {
        console.error("Failed to update the note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(serverURL + `api/notes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      } else {
        console.error("Failed to delete the note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <h2 className="text-2xl font-semibold text-slate-800 px-10">
        Your Notes
      </h2>
      <hr className="mx-10 my-4" />
      {notes.length === 0 && (
        <div className="px-10 mx-auto w-fit block"> No Notes Created </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {notes.map((note, index) => {
          return (
            <Note
              id={note._id}
              key={index}
              title={note.title}
              content={note.content}
              onUpdate={updateNote}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
