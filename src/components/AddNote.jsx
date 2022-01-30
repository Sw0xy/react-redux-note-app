import { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, Textarea } from "@chakra-ui/react";
import { addNote } from "../redux/notes/notesSlice";
import { Button } from "antd";
import { nanoid } from "@reduxjs/toolkit";


function AddNote() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const activeState = (e) => {
    var id = e.target.id;
    const idArray = ["red", "black", "yellow", "green", "purple"];

    idArray.forEach((element) => {
      document.getElementById(element).classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
    setColor(id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const pnotes = JSON.stringify(localStorage.getItem("notes"));

    dispatch(addNote({ id: nanoid(), title, color: color, pnotes: pnotes }));

    setTitle("");
    setColor("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text fontSize="2xl" textAlign="center" fontWeight="bold">
        {" "}
        Select Color{" "}
      </Text>
      <div
        style={{
          width: "300px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
          backgroundColor: "#d5d5d5",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <button id="red" className="red-button" onClick={activeState}></button>
        <button id="purple" className="purple-button" onClick={activeState}>
          {" "}
        </button>
        <button id="black" className="black-button" onClick={activeState}>
          {" "}
        </button>
        <button id="yellow" className="yellow-button" onClick={activeState}>
          {" "}
        </button>
        <button id="green" className="green-button" onClick={activeState}>
          {" "}
        </button>
      </div>

      <Textarea
        style={{ margin: "auto" }}
        placeholder="Here is a sample placeholder"
        colorScheme="orange"
        width="350px"
        focusBorderColor="blue.500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        type="primary"
        style={{ margin: "20px auto" }}
        onClick={handleSubmit}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default AddNote;
