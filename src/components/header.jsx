
import profile from '../assets/images/profile.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-6 border-b-2 max-w-7xl mx-auto'>
             <h1 className='text-3xl  mt-8 font-bold'>knowladge kafe</h1>
             <img className='w-12 rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;