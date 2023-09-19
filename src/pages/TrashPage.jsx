import React from 'react'
import { Navbar } from '../components'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useDelete } from '../Context/DeleteContext'
import { DeleteIcon, RestoreIcon } from './../utils/SVG/Svg';

const TrashPage = () => {

    const { trashNote, restoreFromTrash, deleteFromTrash } = useDelete()

  return (
    <div>
        <Navbar/>
        <div className='pg-cnt'>
            <Sidebar/>
            <div className='note-container'>
                {trashNote.length === 0 && <div className='' >Trash is empty</div>}
                {trashNote.map(({_id, title, description, priority, tags, date, bgColor}) => {
                    return(
                        <div className='note-card' style={{backgroundColor : bgColor}}  key={_id}>
                            <div className='nc-title'>{title}</div>
                            <div className='nc-tags'>tag : {tags} <span className='nc-priority'> priority : {priority} </span></div>
                            <div dangerouslySetInnerHTML={{ __html: description }}/>
                            <div>{date}</div>
                            <div className='note-b-cnt'>
                                <button className='btn bg-grey' onClick={() => restoreFromTrash(_id)}><RestoreIcon/></button>
                                <button className='btn bg-grey' onClick={() => deleteFromTrash(_id)}><DeleteIcon/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export { TrashPage }