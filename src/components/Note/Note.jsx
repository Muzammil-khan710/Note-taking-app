import React, {useState, useEffect} from 'react'
import JoditEditor from "jodit-react"
import { ColorTraySvg } from '../../utils/SVG/Svg'
import "./note.css"
import { useNote } from '../../Context/NoteContext'

const Note = () => {
    const initialBgColor = '#f7f7f7'

    const [bgColor, setBgColor] = useState(initialBgColor)

    const { showModal, setShowModal,  notes, addNotes,  noteContent, setNoteContent } = useNote()

    const presentDate = new Date();
    const date = presentDate.toLocaleString();
    useEffect(() => {
      setNoteContent((prev) => ({ ...prev, date: date }));
    }, [date]);

  return (
    <div className='note-container'>


        {notes.map(({_id, title, tags, description, priority, date, bgColor}) => {
            return(
                <div className='note-card' key={_id} style={{backgroundColor : bgColor}}>
                    <div className='nc-title'>{title}</div>
                    <div className='nc-tags'>tag : {tags} <span className='nc-priority'> priority : {priority} </span></div>
                    <div dangerouslySetInnerHTML={{ __html: description }}/>
                    <div>{date}</div>
                </div>
            )
        })}

        <button className='note-btn' onClick={() => { setShowModal(!showModal) ; setBgColor(initialBgColor)} }>Add a Note</button>

        {showModal &&
            <div className='note-editor' style={{backgroundColor: bgColor}}>
                <input type="text" className='note-title' placeholder="Title" onChange={(e) => { setNoteContent((prev) => ({ ...prev, title: e.target.value})) } }/>
                <JoditEditor onChange={(e) => {  setNoteContent((prev) => ({ ...prev, description : e})) } }/>
                <div className='btn-container'>

                <button className='btn'><ColorTraySvg/>
                <select className='select' onChange={(e) =>  {setBgColor(e.target.value) ; setNoteContent((prev) => ({ ...prev, bgColor: e.target.value}))}}>
                    <option hidden value="">Choose color</option>
                    <option value="#89ebed">blue</option>
                    <option value="#fff8c6">yellow</option>
                    <option value="#ffc0cb">pink</option>
                    <option value="#ddd6f3">purple</option>
                    <option value="#fad6c4">orange</option>
                </select>
                </button>

                <select className='select' name="" id="" onChange={(e) => { setNoteContent((prev) => ({ ...prev, tags: e.target.value}))}}>
                    <option hidden>Choose Tag</option>
                    <option value="Work">Work</option>
                    <option value="Gym">Gym</option>
                    <option value="Health">Health</option>
                    <option value="Teams">Teams</option>
                    <option value="Chores">Chores</option>
                    <option value="Creativity">Creativity</option>
                </select>

                <select className='select' name="" id="" onChange={(e) => { setNoteContent((prev) => ({ ...prev, priority: e.target.value}))}}>
                    <option hidden>Choose Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button className='btn' onClick={() => {  addNotes(noteContent); setShowModal(!showModal); }}>Add</button>

                <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </div>
        }
    </div>
  )
}

export { Note }