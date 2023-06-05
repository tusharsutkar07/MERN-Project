import NoteContext from "./noteContext"; // imported noteContext form noteContext.js file
import { useState } from "react"; // import { useState } from "react"; // imported useState from react

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial) // we have also used the useState so if we need we can change the notes.


    // Get all Notes //
    const getNotes = async () => { // we have added async here
        // API call to fetch all notes.
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token') //new// removed hard coded token and give the localStorage's token item, in the Login.js we are saving token to the local storage.
            },
            // body: JSON.stringify({ title, description, tag }) 
        });
        // const json = response.json(); //commented//
        const json = await response.json() //
        // console.log(json); // 
        setNotes(json) // this will set the fetched note from the database.

    }


    // Add a Note
    const addNote = async (title, description, tag) => { // we have added async here
        //  ToDo: API Call
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token') //new// removed hard coded token and give the localStorage's token item, in the Login.js we are saving token to the local storage.
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json(); //
        // console.log(note) 
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => { // added asynce

        // API call //
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token') //new// removed hard coded token and give the localStorage's token item, in the Login.js we are saving token to the local storage.
            }
            // body: JSON.stringify({ title, description, tag }) // we dont need it here.
        });
        const json = await response.json(); // added await here
        console.log(json)


        console.log("deleting notes with id:" + id);
        const newNotes = notes.filter((note) => { return note._id !== id }) //
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method:"PUT", // POST replaced by PUT
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token') //new// removed hard coded token and give the localStorage's token item, in the Login.js we are saving token to the local storage.
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json(); //
        console.log(json) //

        let newNotes = JSON.parse(JSON.stringify(notes)) // we created this newNotes cause this will help us to update edited notes on the React DOM, and used it bellow.

        // logic to edit in client (logic to edit note). //
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        // we set the value {notes, addnotes} in the value={}. //exported to use others
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
} // commented

export default NoteState;