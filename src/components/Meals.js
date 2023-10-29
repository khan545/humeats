import React, { useState } from "react";
import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
const Meals = () => {
  const [food, setFood] = useState(mealData);
  const filterData = (category) => {
    setFood(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFood(mealData)}
            className="m-1 border-orange-700 rounded-full py-1 px-3  bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => filterData("pizza")}
            className="m-1 border-orange-700 rounded-full py-1 px-3  bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => filterData("chicken")}
            className="m-1 border-orange-700 rounded-full py-1 px-3  bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterData("Salad")}
            className="m-1 border-orange-700 rounded-full py-1 px-3  bg-orange-700 text-white hover:bg-white hover:text-orange-700  hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {food.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-2">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-3 px-2 border-8">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4">
                <p className="flex items-center text-indigo-600">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
