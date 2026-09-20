import { useEffect, useState } from "react";
import NoteCard from "./Components/NoteCard";
import NoteForm from "./Components/NoteForm";
import NoteContainer from "./Components/NoteContainer";

const App = () => {

  const [heading, setHeading] = useState("")
  const [details, setDetails] = useState("")

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyNotes = [...notes];

    copyNotes.push(
      {
        heading: heading,
        details: details
      }
    )

    setNotes(copyNotes)

    setHeading("")
    setDetails("")

  }

  const deleteNote = (idx) => {
    const copyNotes = [...notes]

    copyNotes.splice(idx, 1)
    setNotes(copyNotes)

  }

  return (
    <div className='min-h-screen bg-zinc-950 text-white md:flex'>

      <NoteForm submitHandler={submitHandler} heading={heading} setHeading={setHeading} details={details} setDetails={setDetails} />

      <div className='w-full md:w-1/2 lg:w-3/5 p-6 sm:p-10 md:p-12 lg:p-16 bg-zinc-900/50 border-t md:border-t-0 md:border-l border-zinc-800'>

        <NoteContainer notes={notes} />
        <NoteCard notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App

