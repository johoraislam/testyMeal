
const SingleFood = ({ food }) => {
  const { strMeal, strMealThumb, strCategory, strArea, strYoutube } = food;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{strMeal}</h2>
        <p className="text-sm text-gray-600 mb-1">Category: {strCategory}</p>
        <p className="text-sm text-gray-600 mb-2">Origin: {strArea}</p>
        {strYoutube && (
          <a
            href={strYoutube}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-orange-500 font-medium hover:underline"
          >
            ▶ Watch Recipe Video
          </a>
        )}
      </div>
    </div>
  );
};


export default SingleFood