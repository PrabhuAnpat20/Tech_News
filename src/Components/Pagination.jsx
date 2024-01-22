import React from 'react'
import { useGlobalContext } from '../Context'

function Pagination() {
    const {  nbPages, page,getPrevpost,getNextpost}=useGlobalContext()
    return (
        <>
        <div className=' flex justify-center my-4'>
            <button className=' bg-blue-400 px-3 rounded-sm font-semibold mx-4 ' onClick={getPrevpost}>Prev</button>
            <p className=' text-white'>{page+1}  of  {nbPages}</p>
            <button className=' bg-blue-400 px-3 rounded-sm font-semibold mx-4 ' onClick={getNextpost}>Next</button>
        </div>
        </>
    )
}

export default Pagination
