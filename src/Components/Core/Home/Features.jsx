import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBrain, FaArrowRight } from 'react-icons/fa';
import mentalHealthImage from '../../../Assets/Mental-Health .jpg';
import aiInnovationImage from '../../../Assets/Innovative .jpg';

function Features() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/doctors');
  };

  const handleDiscoverMore = () => {
    navigate('/about');
  };

  return (
    <section className="py-16 px-8 bg-slate-900 border-y-2 border-white border-dashed">
      <div className="grid md:grid-cols-2 gap-1">

        {/* First Feature Block */}
        <div className="rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={mentalHealthImage}
            alt="Transforming Mental Health"
            className="w-9/12 h-96 object-cover mb-4 rounded-lg"
          />
          <button
            onClick={handleGetStarted}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105"
          >
            <FaBrain className="text-lg" />
            Get Started
          </button>
        </div>

        {/* Second Feature Block */}
        <div className="rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={aiInnovationImage}
            alt="Innovative AI Solutions"
            className="w-9/12 h-96 object-cover mb-4 rounded-lg"
          />
          <button
            onClick={handleDiscoverMore}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105"
          >
            <FaArrowRight className="text-lg" />
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Features;
