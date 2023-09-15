
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks'
import Header from './components/header'

function App() {
  

  return (
    <>

     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
