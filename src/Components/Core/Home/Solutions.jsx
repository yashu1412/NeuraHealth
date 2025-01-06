import React from 'react';
import personalizedImg from '../../../Assets/Personalized.jpg';
import compassionateImg from '../../../Assets/Compassionate.jpg';
import tailoredImg from '../../../Assets/Tailored.jpg';

function EmpoweringIndividuals() {
  return (
    <section className="py-12 px-6 relative bg-gray-800">
      {/* Color Grid Background */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-20 pointer-events-none">
        <div className="bg-violet-700"></div>
        <div className="bg-gray-700"></div>
        <div className="bg-black"></div>
      </div>

      <h2 className="text-center text-4xl font-bold italic text-violet-700 mb-12 relative z-10">
        Empowering Individuals
      </h2>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        
        {/* Personalized Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-2xl text-center transition-transform transform hover:scale-105 hover:shadow-purple-500/50 duration-300">
          <img 
            src={personalizedImg} 
            alt="Personalized Support" 
            className="w-9/12 h-80 object-cover rounded-lg mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold font-serif mb-2 text-gray-200">Personalized</h3>
          <p className="text-gray-400 mb-4">
            At NeuraHealth, we understand that everyone's mental health journey is unique.
          </p>
          <button className="bg-violet-700 text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-110">
            Explore Solutions
          </button>
        </div>

        {/* Compassionate Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-2xl text-center transition-transform transform hover:scale-105 hover:shadow-purple-500/50 duration-300">
          <img 
            src={compassionateImg} 
            alt="Compassionate Support" 
            className="w-9/12 h-80 object-cover rounded-lg mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold font-serif mb-2 text-gray-200">Compassionate</h3>
          <p className="text-gray-400 mb-4">
            At the heart of NeuraHealth is a deep commitment to providing compassionate, evidence-based support.
          </p>
          <button className="bg-violet-700 text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-110">
            Take Action
          </button>
        </div>

        {/* Tailored Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-2xl text-center transition-transform transform hover:scale-105 hover:shadow-purple-500/50 duration-300">
          <img 
            src={tailoredImg} 
            alt="Tailored Support" 
            className="w-9/12 h-80 object-cover rounded-lg mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold font-serif mb-2 text-gray-200">Tailored</h3>
          <p className="text-gray-400 mb-4">
            At NeuraHealth, we believe that everyone deserves access to personalized, evidence-based support.
          </p>
          <button className="bg-violet-700 text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-110">
            Get Support
          </button>
        </div>

      </div>
    </section>
  );
}

export default EmpoweringIndividuals;
