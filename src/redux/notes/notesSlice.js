import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action) => {
      const noteIndex = state.items.findIndex(
        (note) => note.id === action.payload.id
      );
      state.items.splice(noteIndex, 1);
      const note = state.items.find((note) => note.id === action.payload.id);
      localStorage.removeItem("notes", note);
    },
  },
});
export const { removeNote, addNote } = notesSlice.actions;

export default notesSlice.reducer;
