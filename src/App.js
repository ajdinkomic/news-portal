import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <div className='shape bg-slate-200 w-full h-full'>
          <h1 className='text-6xl font-bold drop-shadow-2xl text-indigo-900'>
            News Portal
          </h1>
          <div className='mt-8'>
            <Link to='/' className='text-white bg-indigo-500 shadow-md hover:bg-indigo-600 active:bg-indigo-700 text-2xl px-8 py-2 rounded-full'>Home</Link>
            <Link to='/search' className='ml-4 bg-white text-indigo-500 border border-indigo-500 shadow-md hover:bg-indigo-100 hover:text-indigo-600 hover:border-indigo-600 active:border-indigo-700 text-2xl px-8 py-2 rounded-full'>Search news</Link>
          </div>
        </div>
      </header>

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto pb-16 sm:pb-24 lg:pb-32 lg:max-w-none text-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
