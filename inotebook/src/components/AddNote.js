import React, { useState, useContext  } from 'react' // imported useState and useContext
import noteContext from "../context/notes/noteContext" // imported notes as a noteContext from the noteContext, noteContext.js file is connected to the NoteState.js file.

const AddNote = (props) => {
    const context = useContext(noteContext) // used the useContext here for notes.
    const { addNote } = context // used the destructuring to get the addNotes from the context (NoteState.js file).

    const [note, setNote] = useState({title:"", description:"", tag:""}) //

    const handleClick = (e)=>{// we have take the event's e in the onChange(e)
        e.preventDefault(); // this will avoid the page reloding while clicking on the submit button.
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""});
        props.showAlert("Added Successfully", "success") // added alert
    } 

    //  basically onChange function will add the typed value in the discription or the title
    const onChange = (e)=>{ // we have take the event's e in the onChange(e)
        setNote({...note, [e.target.name] : e.target.value}) // this lines means: whatever values in the note object has it will keep there but new written properties should be add or overwrite ( [e.target.name] : e.target.value )
        // the above we have used the ... which is a spred operator.
    }

    return (
        <div className="conatainer my-3">
            <h2>Add a Note</h2>
            {/*  we have copy paste this form from the bootstrap. */}
            <form className="container my-3">

                <div className="mb-3">
                    <label htmlFor="title" className="form-label"> Title </label> {/*  htmlFor="exampleInputEmail1" replaced by htmlFor="title" */}
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={3} required /> {/*  id="exampleInputEmail1" replaced by htmlFor="title" // we added name="title" // type="email" replaced by type="text"  added value */}
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label> {/* htmlFor="exampleInputPassword1" replaced by htmlFor="Description" */}
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={3} required /> {/* id="exampleInputPassword1" replaced by id="description" // we added name="description"  added value */}
                </div>

                {/*  along with title and description we created tag here. */}
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label> {/* htmlFor="exampleInputPassword1" replaced by htmlFor="Description" */}
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={3} required /> {/* id="exampleInputPassword1" replaced by id="description" // we added name="description"  added value */}
                </div>

                {/*  we dont need this, so we comment it. */}
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}

                <button disabled={note.title.length<3 || note.description.length<3} type="submit" className="btn btn-primary" onClick={handleClick} > Add Note</button> {/*  used the disabled here*/}
                {/*  above we wrote the onClick={handleClick} this will listen the click and in the click it will run the handleClick named function.*/}

            </form>
        </div>
    )
}

export default AddNote