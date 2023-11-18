/* eslint-disable react/prop-types */
import { useState } from "react";
import trashbin from "../assets/Trash Bin.svg";
import pencil from "../assets/Pencil.svg";
import tick from "../assets/tick.svg";

const Note = ({ id, title, content, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    onUpdate(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-col h-fit w-full rounded-lg p-4 bg-gray-50">
      {isEditing ? (
        <>
          <input
            type="text"
            className="px-2 py-1 mb-1 focus:outline-1 focus:outline-yellow-300 rounded-lg text-slate-800 font-semibold w-full"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <hr className="my-1" />
          <textarea
            className="px-2 py-1 my-1 rounded-lg focus:outline-1 focus:outline-yellow-300 text-slate-800 resize-none w-full"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              className="w-9 h-9 my-1 rounded-full bg-yellow-300 hover:shadow-md focus:outline-1 focus:outline-green-400"
              onClick={handleUpdateClick}
            >
              <img src={tick} className="h-4 mx-auto my-auto" alt="" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="font-semibold">{title}</div>
          <hr className="my-1" />
          <div className="text-sm whitespace-pre-line">{content}</div>
          <div className="flex justify-end space-x-2 mt-2">
            <button
              className="w-9 h-9 rounded-full bg-yellow-300 hover:shadow-md focus:outline-1 focus:outline-yellow-400"
              onClick={handleDelete} // Add your delete logic here
            >
              <img src={trashbin} className="h-6 mx-auto my-auto" alt="" />
            </button>
            <button
              className="w-9 h-9 rounded-full bg-yellow-300 hover:shadow-md focus:outline-1 focus:outline-yellow-400"
              onClick={handleEditClick}
            >
              <img src={pencil} className="h-6 mx-auto my-auto" alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
