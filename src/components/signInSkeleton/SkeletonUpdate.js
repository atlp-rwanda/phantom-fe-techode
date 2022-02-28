import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonUpdate = () => {
    return ( 
            <div className="lg:flex md:flex h-screen animate-pulse">
                <section className="lg:w-5/12 md:w-7/12 w-full lg:flex md:flex flex lg:flex-col flex-col md:flex-col lg:items-center md:items-center items-center animate-pulse">
                    <SkeletonElement type="title" styles="lg:mt-32 md:mt-32 mt-32"/>
                    <SkeletonElement type="subtitle" />
                    <SkeletonElement type="input" />
                    <SkeletonElement type="input" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="inputbutton" />
                    <SkeletonElement type="text" />
                </section>
            </div>
     );
}
 
export default SkeletonUpdate;