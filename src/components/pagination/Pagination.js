import React from "react";
import prev from '../../assets/svgs/prev.svg';
import next from '../../assets/svgs/next.svg';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    return ( 
        <div className="w-full flex items-center justify-center ">
            <div className="w-11/12 sm:w-6/12 md:w-6/12 p-1 px-4 shadow flex justify-between mt-3">
                <div className="next flex items-center justify-center rounded-md cursor-pointer hover:bg-secondary-100 w-9">
                    <img src={prev} alt="Phantomm" />
                </div>
                {pageNumbers.map( number => (
                <div key={number} onClick={() => paginate(number)} className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">{number}</div>
                ))}
                <div className="next flex items-center justify-center cursor-pointer rounded-md bg-secondary-100 hover:bg-secondary-200 w-9">
                    <img src={next} alt="Phantomm" />
                </div>
            </div>
        </div>
     );
}
 
export default Pagination;