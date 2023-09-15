import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog";



const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
       <main className="md:w-2/3">
            <h2 className="text-2xl">blogs: {blogs.length}</h2>
            {
                blogs.map( blog => <Blog key={blogs.id} blog={blog}></Blog>)
            }
       </main>
    );
};

export default Blogs;