import { createContext, useContext, useState } from "react";
import  axios  from 'axios';
import { useNote } from "./NoteContext";

const ArchiveContext = createContext()

const useArchive = () => useContext(ArchiveContext)

const ArchiveProvider = ({children}) => {

    const {setNotes} = useNote(); 

    const [ archiveNote, setArchiveNote ] = useState([]);

    const addToArchive = async (note, noteId) => {
        const encodedToken = localStorage.getItem("token");
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
        try {
            const {data} = await axios.post(`api/notes/archives/${noteId}`, 
            {note}, config);
            setArchiveNote(data.archives)
            setNotes(data.notes)
        } catch (error) {
            console.log({error})
        }

    }

    const restoreArchived = async (noteId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const {data} = await axios.post(`/api/archives/restore/${noteId}` , 
            {},
            config)
            setNotes(data.notes)
            setArchiveNote(data.archives)
        } catch (error) {
            
        }
    }


    return(
        <ArchiveContext.Provider value={{archiveNote, setArchiveNote, addToArchive, restoreArchived}}>
            {children}
        </ArchiveContext.Provider>
    )
}

export { ArchiveProvider, useArchive }