import { useContext } from "react";
import {assets, plans} from "../assests/assets"
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
 
const {user} = useContext(AppContext)
  return (
    <section className="py-16 px-4 text-center">
      <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">
        Our Plans
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Choose the plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 p-6 flex flex-col items-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              {/* Replace with real icon if needed */}
             <img src={assets.logo_icon}></img>
            </div>
            <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
            <p className="text-2xl font-bold mb-1">{plan.price}</p>
            <p className="text-gray-400 text-sm mb-6">{plan.credits}</p>
            <button className="bg-black text-white px-6 py-2 rounded-full transition-all hover:scale-110">
             {user ? 'Purchased' :  'Get started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyCredit;
