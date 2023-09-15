
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark

    return (
        <div className='bg-gray-200 p-6 m-6 rounded-2xl'>
           <h3>{title}</h3> 
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;