import { createContext, useContext, useState, useEffect } from "react";
import  axios  from 'axios';

const NoteContext = createContext()

const useNote = () => useContext(NoteContext)

const NoteProvider = ({children}) => {

  const initialBgColor = '#f7f7f7'

  const [bgColor, setBgColor] = useState(initialBgColor)

    const [showModal, setShowModal] = useState(false)

    const [editModal, setEditModal] = useState(false)

    const [notes, setNotes] = useState([])

    const initialState = {
        title: "",
        description: "",
        tags: "", 
        priority: "",
        date: "",
        bgColor:""
    }

    const [noteContent, setNoteContent] = useState(initialState)

    const [editNote, setEditNote] = useState(initialState)

    const editNoteHandler = (_id) => {
      const obj = notes.find((note) => note._id === _id);
      setEditNote(obj)
    }

    const saveEditNote = (editNote) => {
      updateNote(editNote);
    };

    useEffect(() => {
        (async () => {
          const encodedToken = localStorage.getItem("token");
          const config = { headers: { authorization: encodedToken } };
          const {data} = await axios.get("/api/notes", config);
          setNotes(data.notes);
        })();
      }, []);
    
    const addNotes = async (note) => {
      const encodedToken = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: encodedToken,
        },
      };
      try {
        const {data} = await axios.post("/api/notes", { note }, config);
        setNotes(data.notes);
        setNoteContent(initialState);
      } catch (e) {
          console.log({e})
      }
    };

      
    const updateNote = async (editNote) => {
      const encodedToken = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: encodedToken,
        },
      };  
      try {
        const {data} = await axios.post(`/api/notes/${editNote._id}`, { note : editNote }, config);
        setNotes(data.notes);
        console.log(data)
      } catch (e) {
          console.log({e})
      }
    };

  return(
      <NoteContext.Provider value={{showModal,setShowModal,  addNotes, notes, setNotes, noteContent, setNoteContent, bgColor, setBgColor, initialBgColor,  updateNote, editNoteHandler, saveEditNote, editModal, setEditModal, editNote, setEditNote}}>
          {children}
      </NoteContext.Provider>
  )
}

export {NoteProvider, useNote}