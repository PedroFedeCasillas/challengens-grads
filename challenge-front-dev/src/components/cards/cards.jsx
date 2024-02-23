// eslint-disable-next-line no-unused-vars
import React from "react";

function Cards({ product }) {
  const { name, code, price, image } = product;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <img
          className="object-cover bg-white border rounded-lg shadon-md w-full h-96 aspect-w-4 aspect-h-5 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={`${name}`}
        />
      </div>

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Codigo: <b>{code}</b>
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Precio <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

export default Cards;
