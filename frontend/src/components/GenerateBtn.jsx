import { assets} from "../assests/assets";

const GenerateBtn = () => {
    return (
       <div className="pb-16 text-center">
  <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-3 md:py-16 leading-snug">
    <span className="text-black font-bold block">See the magic</span>
    <span className="text-black font-normal text-lg opacity-80 block animate-fadeInUp">by yourself</span>
  </h1>

  <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500 cursor-pointer">
    generates Images
    <img src={assets.star_group} alt="star" className="h-6" />
  </button>
</div>

    );
};

export default GenerateBtn;