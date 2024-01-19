import React, { useEffect, useState } from 'react';
import './App.css';
import NotesUpdate from './components/NoteUpdate';
import NotesList from './components/NoteList';
import NotesAdd from './components/NoteAdd';

const linkback = 'https://tickets2.onrender.com/notes/'

function App() {
  const [notes, setNotes] = useState([]);
  // console.log(notes)
  useEffect(() => {
    const fetchData = async () => {
        onUpdate();
    };
    fetchData();
  }, []);

  const onUpdate = async () => {
    const request = await fetch(`${linkback}`, {
      method: 'GET'
    });
    const response = await request.json();
    setNotes([...response])
  }

  const addNotes = async (content) => {
    await fetch(`${linkback}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    onUpdate();
  }

  const onDelete = async (id) => {
    await fetch(`${linkback}${id}`, {
      method: 'DELETE'
    });
    onUpdate();
  }

  return (
    <>
      <NotesAdd addNotes={addNotes} />
      <NotesUpdate onUpdate={onUpdate} />
      <NotesList notes={notes} onDelete={onDelete} />
    </>
  );
}

export default App