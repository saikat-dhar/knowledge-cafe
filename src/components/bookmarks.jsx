
import PropTypes from 'prop-types';
import Bookmark from './bookmark';
const Bookmarks = ({bookmarks , readinigTime}) => {
    
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-4 p-2">
            <div>
                <h3 className='text-center'>Reading Time: {readinigTime}</h3>
            </div>
           <h2 className='text-2xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>  
           {
            bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readinigTime: PropTypes.number
};

export default Bookmarks;