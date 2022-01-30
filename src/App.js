import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import { Text } from '@chakra-ui/react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
function App() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className="App">
      <Text fontSize='5xl' textAlign="center" fontWeight="black" color="blue.800">Todo App</Text>
     <Search search={search} onSearchChange={handleChange}  />
     <AddNote />
     <NoteList  search={search} />
    </div>
  );
}

export default App;
