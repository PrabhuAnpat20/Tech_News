//context creation 
//provider
//useContext
import React, { useContext, useReducer,useEffect } from "react";
import reducer from "./reducer";

let API="http://hn.algolia.com/api/v1/search?"
const AppContext=React.createContext();

const initialState={
  isLoading:true,
  query:"HTML",
  nbPages:0,
  page:0,
  hits:[],
}


const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState);

    const searchPost=(searchQuery)=>{
      dispatch({
        type:"SEARCH_QUERY",
        payload:searchQuery,
      })
    }

    const getPrevpost=()=>{
      dispatch({
        type:"PREVPOST",
      })
    }

    const getNextpost=()=>{
      dispatch({
        type:"NEXTPOST",
      })
    }
   
    const  fetchApiData=async (url)=>{

       dispatch ({
        type: "SET_LOADING",
       })
        try {
            let res=await fetch(url)
            let data=await res.json();
            console.log(data)
            dispatch({
              type:"GET_STORIES",
              payload:{
              hits:data.hits,
              nbPages:data.nbPages,
                
              }


          })
            
        } catch (error) {
            console.log(error)
        }
    }
  useEffect(()=>{
     fetchApiData(`${API}query=${state.query}&page=${state.page}`)   
  },[state.query,state.page])


    return <AppContext.Provider value={{...state,searchPost,getPrevpost,getNextpost}}>
        {children}
      </AppContext.Provider>
}
//custom hook 
const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}