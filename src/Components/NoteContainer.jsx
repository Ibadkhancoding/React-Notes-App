import React from 'react'

const NoteContainer = ({ notes }) => {
    return (
        <div className='flex items-end justify-between mb-6'>
            <div>
                <p className='sm:text-sm text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold md:mb-2'>
                    Your collection
                </p>
                <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>
                    Recent Notes
                </h1>
            </div>

            <span className='hidden sm:block text-sm text-zinc-400 font-medium'>
                {notes.length} notes
            </span>
        </div>
    )
}

export default NoteContainer