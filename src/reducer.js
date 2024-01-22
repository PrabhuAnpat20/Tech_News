const reducer=(state,action)=>{
    switch(action.type){
        case "GET_STORIES":
            return{
                ...state,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
                isLoading:false,
                
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
                
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload,
                page:0
            }   
        case "PREVPOST":
            let pg=state.page
            if (pg<=0) {
                pg=0
            }
            else{
                pg=pg-1
            }
            return{
                ...state,
                page:pg
            }    
        case "NEXTPOST":
            return{
                ...state,
                page:state.page+1
            }         
    }
    return state;
}
export default reducer