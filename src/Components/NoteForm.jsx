import React from 'react'

const NoteForm = ({ submitHandler, details, setDetails, heading, setHeading }) => {
    return (
        <>
            <form
                onSubmit={submitHandler}
                className='flex flex-col gap-5 w-full md:w-1/2 lg:w-[45%] p-6 sm:p-10 md:p-12 lg:p-16'
                action=""
            >
                <div className='md:mb-2 mb-1'>
                    <p className='sm:text-sm text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold md:mb-2'>
                        Notes
                    </p>
                    <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>
                        Add Note
                    </h1>
                </div>

                {/* Input for Heading */}
                <input
                    value={heading}
                    onChange={(e) => { setHeading(e.target.value) }}
                    className='border border-zinc-600 bg-zinc-900 font-medium w-full px-5 py-4 outline-none rounded-xl placeholder:text-zinc-500 focus:border-zinc-400 transition'
                    type="text"
                    placeholder='Enter Notes Heading' />

                {/* Input for Detailed Notes */}
                <textarea
                    value={details}
                    onChange={(e) => { setDetails(e.target.value) }}
                    className='border border-zinc-600 bg-zinc-900 h-40 font-medium w-full px-5 py-4 outline-none rounded-xl resize-none placeholder:text-zinc-500 focus:border-zinc-400 transition'
                    placeholder='Write Details'></textarea>

                <button className='bg-white text-black font-semibold w-full px-4 py-4 rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition'>
                    Add Note
                </button>
            </form>
        </>
    )
}

export default NoteForm