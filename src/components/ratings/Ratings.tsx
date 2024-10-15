"use client"


/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";

const StarRating = ({ ratted, size }: { ratted: number, size: string }) => {
    const ratingArr = new Array(5).fill(undefined);
    return (
        <div className="">
            <div className="flex gap-1">
                {ratingArr?.map((_, index) => {
                    index = index + 1;
                    // console.log(index);
                    return (
                        <Fragment key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"className={`${index <= ratted ? "fill-yellow-400 stroke-yellow-400 cursor-pointer" : "stroke-yellow-400"} lucide lucide-star`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default StarRating;