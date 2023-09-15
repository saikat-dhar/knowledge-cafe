import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog";
import PropTypes from 'prop-types';



const Blogs = ({handelToBookmark , handelReadintTime}) => {
    
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
                blogs.map((blog, id) => <Blog key={id} blog={blog} handelToBookmark={handelToBookmark} handelReadintTime={handelReadintTime}></Blog>)
            }
       </main>
    );
};

Blogs.propTypes = {
    handelToBookmark: PropTypes.func,
    handelReadintTime: PropTypes.func
};

export default Blogs;