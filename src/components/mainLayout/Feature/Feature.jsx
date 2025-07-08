import { useLoaderData } from "react-router";
import SingleFood from "./singleFood/SingleFood";
import { useState } from "react";

const Feature = () => {
  const data = useLoaderData();
  const meals = data.meals || [];
  const [showAll, setShowAll] = useState(false);

  const visibleMeals = showAll ? meals : meals.slice(0, 6);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
    {
        visibleMeals.map(food=> <SingleFood key={food.idMeal} food={food}></SingleFood>)
    }

    {meals.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition duration-200"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Feature;
