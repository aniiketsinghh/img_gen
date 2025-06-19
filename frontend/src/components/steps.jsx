
import { stepsData } from '../assests/assets'

const steps = () => {
  return (
  <div className="text-center py-20 px-4 mt-30">
    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
      How it works
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      Transform words into stunning images
    </p>

    {/* Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {stepsData.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4 shadow-sm rounded-lg hover:shadow-md transition">
          <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default steps
