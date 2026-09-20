import { X } from "lucide-react"

const NoteCard = ({ notes, deleteNote }) => {
    return (
        <div className='flex flex-wrap gap-5 mt-6'>
            {notes.map((elem, idx) => {
                return (
                    <div
                        key={idx}
                        className="h-52 w-full sm:w-44 md:w-40 lg:w-44 relative bg-zinc-800 border border-zinc-700 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl transition duration-200"
                    >
                        <h2
                            onClick={() => deleteNote(idx)}
                            className='absolute right-3 top-3 cursor-pointer active:scale-90 text-zinc-500 hover:text-white transition'
                        >
                            <X size={18} />
                        </h2>

                        <h1 className='leading-tight text-base font-bold pb-2 pr-5 break-words border-b-zinc-600 border-b-1'>
                            {elem.heading}
                        </h1>

                        <p className='mt-3 leading-relaxed text-sm text-zinc-400 font-medium break-words'>
                            {elem.details}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default NoteCard