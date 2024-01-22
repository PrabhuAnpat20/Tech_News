import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'


function Stories() {
   const {hits,isLoading}=useGlobalContext();

   if(isLoading){
    return (
        <>
        <h1 className=' text-white text-9xl font-bold flex justify-center my-56'>Loading........</h1>
        </>
    )
   }

    return (
        <>
         
        {hits.map((currpost) => {
            const {title,author,objectID,url,num_comments}=currpost
            return (
            <>
            <div className=' flex justify-center ' key={objectID}>
            <div className=' bg-slate-300 my-4 w-1/3 p-3  '>
                <h2 className=' font-bold'>{title}</h2>
                <div className=' flex justify-between'>
                <p>By {author} </p> 
                <p>{num_comments} comments</p>
                </div>
               
                <div>
                    <a href={url} className=' text-blue-500 text-sm'>Read More</a>
                </div>
            
            </div>
            </div>
           

            </>
            );
        })}
        </>
    )
}

export default Stories
