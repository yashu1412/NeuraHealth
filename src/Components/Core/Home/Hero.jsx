import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/doctors');
  };

  return (
    <section className="text-center py-16 bg-gray-900 text-white overflow-hidden border-b-2 border-white border-dashed pt-32">
      <div className="container mx-auto px-4">
        {/* Hero Heading */}
        <div className="mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-semibold italic mb-4 dancing-script-hero-heading">
            NeuraHealth: Your AI-Powered Mental Health
          </h2>
          <p className="text-gray-300 mb-6">
            NeuraHealth is an AI-powered mental health companion built on the MERN stack.
          </p>
          <button
            onClick={handleNavigation}
            className="ibm-plex-mono-regular hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Image Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-in-up">
          {/* First Image with Animation */}
          <div className="relative transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?t=st=1733652116~exp=1733655716~hmac=433a99d33cd965fd9aad61c1bb3ed3b049b55fedf738f3fccc5ac3d41bf70281&w=996"
              alt="AI Mental Health"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-80 object-cover"
            />
          </div>

          {/* Second Image with Overlay and Animation */}
          <div className="relative transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17820.jpg?t=st=1733652179~exp=1733655779~hmac=c3dc9fa8513c4f91481eb5496a83e51ef98a1184a2ec0340b97536a904a0be45&w=1060"
              alt="Emotional Support"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-80 object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end items-start text-white p-4 rounded-lg">
              <h3 className="text-lg font-bold ibm-plex-mono-bold">
                Emotional Support
              </h3>
              <p className="text-2xl font-extrabold mb-1 ibm-plex-mono-italic text-yellow-900">
                Personalized Insights
              </p>
              <p className="text-lg font-semibold ibm-plex-mono-medium">
                Real-Time Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
