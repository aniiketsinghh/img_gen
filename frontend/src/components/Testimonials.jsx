import React from 'react';
import {assets, testimonialsData} from '../assests/assets'

const Testimonials = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Customer Testimonials</h2>
        <p className="text-gray-500 mt-2">What Our Users Are Saying</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((_, i) => (
                  <img key={i} src={assets.rating_star} alt="star" className="w-5 h-5" />
                ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
