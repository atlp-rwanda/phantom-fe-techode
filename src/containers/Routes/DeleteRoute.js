import React from 'react'

function DeleteRoute() {
    const deleteRoute = (id) => {
        const newRoutes = allRoutes.filter((route) => route.id !== id);
        setAllRoutes(newRoutes);
        localStorage.setItem("routes", JSON.stringify(newRoutes));
      };
    return (
        <div>
            <div className=' w-1/3 flex flex-col rounded-lg items-center justify-center shadow-2xl'>
                <p className='text-red-500 mb-3 mt-3 font-bold text-sm'>Deleting route</p>
                <hr className='w-full h-0.5 bg-gray-200' />
                <p className='mt-5 text-slate-200 w-4/5 text-sm'>You are about to delete <span className='text-blue-500 font-bold text-sm'>Kivu belt</span></p>
                <form className='mt-5 w-4/5 mb-5' action="">
                    <div className='flex justify-between  w-full'>
                    <button className='bg-indigo-300 text-blue-500 w-32 h-8 rounded font-bold text-sm'>Cancel</button>
                    <button onClick={() => deleteRoute(item.id)} className='bg-red-300 text-red-500 font-bold w-32 h-8 rounded text-sm'>Delete</button>
                    </div>
                    </form>
            </div>
        </div>
        
    )
}

export default DeleteRoute
