import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handelToBookmark}) => {

    const {title,cover_pic, author_img , author,  reading_time, posted_date, hashtag} = blog
    return (
        <div className='mb-20'>
             <img className='w-full rounded-3xl' src={cover_pic} alt="" />
             <div className='flex justify-between items-center'>
                <div className='flex mt-8'>
                    <img className='w-14 h-14 rounded-lg' src= {author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handelToBookmark} className='ml-4'><FaBookmark></FaBookmark></button>
                </div>
             </div>
            <h2 className='mt-6 mb-4'>{title}</h2>
            <p><a href="">{hashtag}</a></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;