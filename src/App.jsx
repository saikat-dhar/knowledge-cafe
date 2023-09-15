
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks'
import Header from './components/header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readinigTime , setRedingTime] = useState(0)


  const handelReadintTime = time => {
   const newReadingTime = readinigTime + time ;
   setRedingTime(newReadingTime)
  }

  const handelToBookmark = blog => {
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>

     <Header></Header>
     <div className='md:flex md:w-2/3 max-w-7xl mx-auto'>
     <Blogs  handelToBookmark={handelToBookmark} handelReadintTime={handelReadintTime}></Blogs>
     <Bookmarks readinigTime={readinigTime} bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
