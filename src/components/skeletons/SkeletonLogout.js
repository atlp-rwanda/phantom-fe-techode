import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonLogout = () => {
    return ( 
        <div className="h-full w-full md:h-full animate-pulse">
            <section className="flex items-center justify-center">
                <SkeletonElement type="avatar" styles="w-1/5 h-1/5 md:w-1/3 md:h-1/3 mt-5" />
            </section>
            <section className="flex flex-col pl-2 pr-2 md:pl-10 md:pr-10">
                <div className="flex flex-col items-center">
                    <SkeletonElement type="title" styles="flex justify-center mt-5 mb-5" />
                </div>
                <div className="flex flex-row">
                    <div className="mt-5 mr-5">
                        <SkeletonElement type="icon"/>
                    </div>
                    <div className="flex flex-col">
                        <SkeletonElement type="title" styles="mt-8" />
                        <SkeletonElement type="title" styles="mt-1" />
                        <SkeletonElement type="title" styles="mt-1" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="mt-5 mr-5">
                        <SkeletonElement type="icon"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <SkeletonElement type="title" styles="mt-8" />
                        </div>
                        <div className="flex flex-row">
                            <SkeletonElement type="title" styles="mt-1" />
                            <SkeletonElement type="iconsmall" styles="mt-1 ml-3 w-4 h-4" />
                        </div>
                        <div className="flex flex-row">
                            <SkeletonElement type="title" styles="mt-1" />
                            <SkeletonElement type="iconsmall" styles="mt-1 ml-3" />
                        </div>
                        <div className="flex flex-row">
                            <SkeletonElement type="title" styles="mt-1" />
                            <SkeletonElement type="iconsmall" styles="mt-1 ml-3" />
                        </div>
                    </div>
                </div>
                <SkeletonElement type="inputbutton" styles="mt-1 h-8 md:h-11 w-full" />
            </section>
        </div>
     );
}
 
export default SkeletonLogout;