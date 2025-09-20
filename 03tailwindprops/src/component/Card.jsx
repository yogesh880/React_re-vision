import React from "react";

function Card( props ) {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={props.profile}
          />
        </div>
        <div className="flex">
            <div>
          <span className="text-2xl font-mediumss">Name : {props.Name}</span>
          </div>
          <div>
          <span className="font-medium text-sky-500">Role : {props.post}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
