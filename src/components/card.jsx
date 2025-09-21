import React from "react";

const Card=(props) => {
  return (
    <div>
      <div className="h-60 lg:h-80rounded-3xl w-30 lg:w-60 bg-gray-100 ">
        <img
          className="rounded-t-3xl rounded-b mb-8  h-40 object-cover w-60"
          src={props.img}
          alt=""
        />
        <a className="text-1xl font-bold mb-2" href="">
          {props.title}
        </a>
        <a className="text-blue-600 mb-2 block text-1xl" href="">
          {props.date}{" "}
        </a>
        <a className="block text-1xl mb-2" href="">
          {props.price}
        </a>
        <a className="block text-1xl mb-2" href="">
          {props.location}{" "}
        </a>
      </div>
    </div>
  );
}
export default Card;
