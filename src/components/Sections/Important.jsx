import React from 'react'

export default function Important() {
    return (
        <div className='flex flex-col items-center sm:flex-row sm:items-start sm:justify-center gap-4' >
            <div className='w-full sm:w-5/12 p-4'>
                <h3 className='text-3xl text-red-600 font-semibold mb-2'>Important Announcement</h3>
                <div className='w-ful'>
                    <p className='mb-2 border-b-2 border-red-600 font-medium'>
                        {"->"} Two B.E. programs- Rubber Technology and Computer Engineering accredited by NBA for three years
                    </p>
                    <p className='mb-2 border-b-2 border-red-600 font-medium'>
                        {"->"} B.E. programs- Rubber Technology and Computer Engineering accredited by NBA for three years
                    </p>
                    <p className='mb-2 border-b-2 border-red-600 font-medium'>
                        {"->"} B.E. programs- Rubber Technology and Computer Engineering accredited by NBA for three years
                    </p>
                </div>
                <button className='bg-red-600 hover:bg-red-800 p-1 w-26 rounded float-end text-white'>More
                    <span class="material-symbols-outlined text-sm ps-1">
                        arrow_forward_ios
                    </span></button>
            </div>
            <div className='w-full sm:w-5/12 p-4'>
                <h3 className='text-3xl font-semibold mb-2 text-red-600'>About LDCE</h3>
                <p className='mb-2 font-medium'>
                    L. D. College of Engineering (LDCE), is a premier
                    government engineering institute in Gujarat set with the
                    objectives of imparting higher education, research and training
                    in various fields of engineering & technology.
                </p>
                <button className='bg-red-600 w-26 hover:bg-red-800 p-1 rounded float-end text-white'>Read More
                    <span class="material-symbols-outlined text-sm ps-1">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </div>
    )
}
