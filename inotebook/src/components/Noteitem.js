import React from 'react'
import noteContext from "../context/notes/noteContext" // imported notes as a noteContext from the noteContext, noteContext.js file is connected to the NoteState.js file.
import { useContext } from 'react' // imported useContext.

const Noteitem = (props) => {
    const context = useContext(noteContext); // used the useContext here for notes.
    const { deleteNote } = context; // we destructured the deleteNote which comes as props from the useContext.
    const { note, updateNote } = props; // we destructured the note which comes as props from the Notes.js.
    return (

        <div className="col-md-3">

            <div className="card my-3">
                <div className="card-body">

                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success")}}></i> {/* we used showAlert here */}
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i> {/* we added edit icon from the Font Awesome, (this icon's tag name is i so use i when using css) // added alert*/}
                    </div>

                    <p className="card-text">{note.description}</p>

                </div>
            </div>

        </div>

    )
}

export default Noteitem
