import { Link } from "react-router-dom";

const PageNotFound = () => (
    <>
        <div className="bg-gradient-to-r from-indigo-400 to-blue-200">
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8 text-slate-800">
                        <h1 className="text-9xl font-bold text-indigo-500">404</h1>
                        <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <Link to='/' className='text-white bg-indigo-500 shadow-md hover:bg-indigo-600 active:bg-indigo-700 text-2xl px-8 py-2 rounded-full'>Home</Link>
                        <Link to='/search' className='ml-4 bg-white text-indigo-500 border border-indigo-500 shadow-md hover:bg-indigo-100 hover:text-indigo-600 hover:border-indigo-600 active:border-indigo-700 text-2xl px-8 py-2 rounded-full'>Search news</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default PageNotFound;