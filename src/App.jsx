
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks'
import Header from './components/header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handelToBookmark = blog => {
    console.log('bookmark clicked');
  }

  return (
    <>

     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs  handelToBookmark={handelToBookmark}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
