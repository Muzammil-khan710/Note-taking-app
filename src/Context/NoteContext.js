import { createContext, useContext, useState, useEffect } from "react";
import  axios  from 'axios';

const NoteContext = createContext()

const useNote = () => useContext(NoteContext)

const NoteProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false)

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

    return(
        <NoteContext.Provider value={{showModal,setShowModal,  addNotes, notes, noteContent, setNoteContent}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteProvider, useNote}