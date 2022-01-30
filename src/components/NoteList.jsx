import React from "react";
import { Text } from "@chakra-ui/react";
import { Button } from "antd";
import { removeNote } from "../redux/notes/notesSlice";
import { useSelector, useDispatch } from "react-redux";
function NoteList({ search }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.notes.items);
  return (
    <div >
      <Text my="5" fontSize="2xl" textAlign="center" fontWeight="bold">
        Notes 
      </Text>
      <ul className="container">
        {items.length === 0 ? (
          <Text fontSize="2xl" textAlign="center" fontWeight="normal">
             no more notes
          </Text>
        ) : (
          items.filter((item) => {
            if (search === "") {
              return item;
            }
            return item.title.toLowerCase().includes(search.toLowerCase());
          })
           .map((item) => {
            return (
                <li key={item.id} className={`todo ${item.color}`} >
                  <Text className={`todo-title ${item.color === 'yellow' ? 'blacktext' : 'graytext' }`} wordBreak="break-all">{item.title}</Text>
                  {item.title ? (
                    <Button
                    className="todo-button"
                      danger
                      onClick={() => dispatch(removeNote(item.id))}
                    >
                      Delete
                    </Button>
                  ) : (
                    ""
                  )}
                </li>
             
            );
          })
        )}
      </ul>
    </div>
  );
}

export default NoteList;
