import React from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div className=" flex justify-center p-4 mt-3">
        <form >
          <div  >
            <input
              className=" p-2 w-48  rounded-xl  "
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)
              
            }
            />
            
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
