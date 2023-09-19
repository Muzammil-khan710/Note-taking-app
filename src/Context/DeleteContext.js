import { createContext, useState } from 'react';
import axios from 'axios';
import { useNote } from './NoteContext';
import { useContext } from 'react';

const DeleteContext = createContext()

const useDelete = () => useContext(DeleteContext)

const DeleteProvider = ({children}) => {

    const { setNotes } = useNote()
    
    const [ trashNote, setTrashNote ] = useState([])

    const addToTrash = async (note, noteId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
        
        try {
            const { data } =  await axios.post(`api/notes/trash/${noteId}`,
            {note}, config)
            setTrashNote(data.trash)
            setNotes(data.notes)
        } catch (error) {
            console.log({error})
        }
    }

    const restoreFromTrash = async (noteId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.post(`api/trash/restore/${noteId}`,
            {}, config)

            setNotes(data.notes)
            setTrashNote(data.trash)
        } catch (error) {
            
        }

    }

    const deleteFromTrash = async (noteId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`api/trash/delete/${noteId}`, config)
            setTrashNote(data.trash)

        } catch (error) {
            console.log({error})
            
        }
    }

    return(

        <DeleteContext.Provider value={{ trashNote, setTrashNote, addToTrash, restoreFromTrash, deleteFromTrash}}>
            {children}
        </DeleteContext.Provider>
    )
}

export { DeleteProvider, useDelete }