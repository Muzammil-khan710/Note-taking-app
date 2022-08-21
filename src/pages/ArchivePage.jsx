import React from 'react'
import { Navbar } from '../components'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { useArchive } from '../Context/ArchiveContext'

const ArchivePage = () => {
    
    const { archiveNote, restoreArchived  } = useArchive()

    return (

    <div>
        <Navbar/>
        <div className='pg-cnt'>
        <Sidebar/>
            <div className='note-container'>
                {archiveNote.map(({_id, title, description, priority, tags, date, bgColor}) => {
                    return(
                        <div className='note-card' style={{backgroundColor : bgColor}}  key={_id}>
                            <div className='nc-title'>{title}</div>
                            <div className='nc-tags'>tag : {tags} <span className='nc-priority'> priority : {priority} </span></div>
                            <div dangerouslySetInnerHTML={{ __html: description }}/>
                            <div>{date}</div>
                            <button onClick={() => restoreArchived(_id)}>Restore</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export { ArchivePage }