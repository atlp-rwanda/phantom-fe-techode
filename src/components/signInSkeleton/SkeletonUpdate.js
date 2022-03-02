import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonUpdate = () => {
    return ( 
            <div className="lg:flex md:flex h-screen animate-pulse">
                <section className="lg:w-5/12 md:w-7/12 w-full lg:flex md:flex flex lg:flex-col flex-col md:flex-col lg:items-center md:items-center items-center animate-pulse">
                    <SkeletonElement type="title" styles="lg:mt-32 lg:ml-60 md:ml-56 md:mt-24 mt-16"/>
                    <SkeletonElement type="subtitle" styles="lg:mt-2 lg:ml-60 md:ml-56 md:mt-2 mt-2" />
                    <SkeletonElement type="input" styles="lg:mt-2 lg:w-1/2 lg:ml-60 md:ml-56 md:mt-2 mt-2" />
                    <SkeletonElement type="input" styles="lg:mt-2 lg:ml-60 md:ml-52 md:mt-2 mt-2" />
                    <SkeletonElement type="text" styles="lg:mt-2 lg:ml-60 md:ml-56 md:mt-2 mt-2" />
                    <SkeletonElement type="inputbutton" styles="lg:mt-2 lg:ml-60 md:ml-56 md:mt-2 mt-2" />
                    <SkeletonElement type="text" styles="lg:mt-2 lg:ml-60 md:ml-56 md:mt-2 mt-2" />
                </section>
            </div>
     );
}
 
export default SkeletonUpdate;