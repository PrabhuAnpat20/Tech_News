
import React  from 'react'
import './App.css'
import Stories from './Components/Stories'
import Search from './Components/Search'
import Pagination from './Components/Pagination'

function App() {

  return (
 <div>
  <h1 className=' flex justify-center font-bold text-4xl mt-6 text-yellow-50'>Search For Tech News</h1>
  <Search/>
  <Pagination/>
  <Stories/>
 </div>
  )
}

export default App
