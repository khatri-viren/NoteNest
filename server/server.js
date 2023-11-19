// server.js
import express from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
import { config } from "dotenv";

const app = express();
const port = process.env.PORT || 4001;
config();

// connect(`${process.env.MONGODB_URI}`).then(
//   () => {
//     console.log("Connnected to Mongoose successfully!");
//   },
//   (err) => {
//     console.log("Error while connecting", err);
//   }
// );

// Define a Note schema
const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // Add 'Authorization' to the header
  next();
});

app.use(cors());

// Routes
app.get("/", async (req, res) => {
  res.status(200).json({ message: "NoteNest Server is Live" });
});

// app.get("/api/notes", async (req, res) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/api/notes", async (req, res) => {
//   const { title, content } = req.body;
//   try {
//     const newNote = new Note({ title, content });
//     await newNote.save();
//     res.json(newNote);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.put("/api/notes/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;

//   try {
//     // Check if the note with the given ID exists
//     const existingNote = await Note.findById(id);

//     if (!existingNote) {
//       return res.status(404).json({ error: "Note not found" });
//     }

//     // Update the note
//     const updatedNote = await Note.findByIdAndUpdate(
//       id,
//       { title, content },
//       { new: true }
//     );

//     res.json(updatedNote);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.delete("/api/notes/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Note.findByIdAndDelete(id);
//     res.json({ message: "Note deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
