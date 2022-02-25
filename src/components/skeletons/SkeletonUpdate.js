import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonUpdate = () => {
    return ( 
            <div className="border border-slate-200 rounded-md h-full w-full md:w-2/5 md:mt-10 md:mr-10 animate-pulse">
                <section className="flex items-center justify-center">
                    <SkeletonElement type="avatar" styles="mt-5 w-1/6 h-1/6" />
                </section>
                <section className="flex flex-col items-center mt-5 pl-2 pr-2 md:pl-10 md:pr-10 animate-pulse">
                    <SkeletonElement type="input" styles="mt-1 md:mt-5 md:w-4/6 h-8 md:h-11 md:py-2 md:pl-4 md:pr-3"/>
                    <SkeletonElement type="input" styles="mt-1 md:mt-5 md:w-4/6 h-8 md:h-11 md:py-2 md:pl-4 md:pr-3"/>
                    <SkeletonElement type="input" styles="mt-1 md:mt-5 md:w-4/6 h-8 md:h-11 md:py-2 md:pl-4 md:pr-3"/>
                    <SkeletonElement type="input" styles="mt-1 md:mt-5 md:w-4/6 h-8 md:h-11 md:py-2 md:pl-4 md:pr-3"/>
                    <SkeletonElement type="title" styles="mt-5"/>
                    <SkeletonElement type="input" styles="mt-1 md:mt-5 md:w-4/6 h-8 md:h-11 md:py-2 md:pl-4 md:pr-3"/>
                </section>
            </div>
     );
}
 
export default SkeletonUpdate;