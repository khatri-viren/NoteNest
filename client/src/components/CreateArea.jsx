/* eslint-disable react/prop-types */
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import plus from "../assets/Plus.svg";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    // id: uuidv4(),
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      onAdd(note);
      setNote({
        // id: uuidv4(),
        title: "",
        content: "",
      });
    }
  };

  return (
    <div className="w-fit bg-gray-100 mx-auto my-8 rounded-xl text-slate-800 shadow-sm ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 p-5">
          <input
            className="w-96 px-2 py-1 focus:outline-1 focus:outline-yellow-300 rounded-lg text-slate-800 font-semibold"
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            className="w-92 px-2 py-1 rounded-lg focus:outline-1 focus:outline-yellow-300 text-slate-800 resize-none"
            name="content"
            id="content"
            placeholder="Your content"
            cols="10"
            rows="5"
            value={note.content}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-12 text-slate-600 h-12 bg-yellow-300 rounded-full text-2xl font-semibold my-auto hover:shadow-md focus:outline-1 focus:outline-yellow-400"
            >
              <img src={plus} alt="" className="mx-auto my-auto h-1/2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
