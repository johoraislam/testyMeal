import { NavLink } from "react-router";
import bannarPng from "../../../assets/mealBannar.jpg";
const Bannar = () => {
  return (
    <div className="mx-12 my-7">
        <h1 className="text-4xl md:text-8xl text-green-500 font-thin text-center my-6 bg-gradient-to-r from-amber-300 to-green-200 py-3.5">Hello Foody</h1>
      <div
        style={{
          backgroundImage: `url(${bannarPng})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      ></div>
      <nav className="flex gap-4 justify-center mt-4">
        <NavLink to="feature" className="text-red-600 text-3xl border p-3 rounded-2xl">Choose Your Food</NavLink>
      </nav>
    </div>
  );
};

export default Bannar;
