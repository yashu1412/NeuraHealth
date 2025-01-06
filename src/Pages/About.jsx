import React from 'react';
import { SupportIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/outline'; 
import Navbar from '../Components/Common/Navbar'; 
import Footer from '../Components/Common/Footer'; 
import AboutImage from '../Assets/about_hero.jpeg';
import FeatureImage1 from '../Assets/Emotional-Insights.jpg';
import FeatureImage2 from '../Assets/AI-Driven-Guidance.jpg';
import FeatureImage3 from '../Assets/Compassionate-Support.jpg';

import ContactSupport from '../Components/Core/About/Contact';
const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center mt-20">
        <h1 className="text-4xl font-extrabold italic mb-6 text-violet-400 animate-fadeIn">
          About NeuroHealth
        </h1>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          Empowering well-being with AI-driven insights and compassionate care. Our mission is to provide accessible, personalized mental health support through innovative technology.
        </p>
        <img
          src={AboutImage}
          alt="Team working together"
          className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp"
        />
      </section>

      {/* Company Mission Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-violet-400 text-center">
            Our Mission
          </h2>
          <p className="text-gray-400 text-center mb-12">
            At NeuroHealth, we aim to revolutionize mental health care by integrating AI-powered tools with evidence-based practices. Our platform is designed to provide personalized support that adapts to each individual's needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 animate-slideInLeft">
              <SparklesIcon className="w-12 h-12 text-violet-400" />
              <div>
                <h3 className="text-lg font-semibold mb-2">AI-Driven Insights</h3>
                <p className="text-gray-400">
                  Our AI models analyze emotional states and provide actionable guidance to improve mental well-being.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 animate-slideInRight">
              <LightBulbIcon className="w-12 h-12 text-violet-400" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Personalized Care</h3>
                <p className="text-gray-400">
                  Tailored recommendations based on individual emotional patterns, ensuring a customized approach to mental health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-semibold mb-8 text-violet-400 text-center animate-fadeIn">
    Featured on Our Platform
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="flex flex-col items-center animate-zoomIn">
      <img
        src={FeatureImage1}
        alt="Emotional Insights"
        className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4"
      />
      <p className="font-semibold">Emotional Insights</p>
    </div>

    <div className="flex flex-col items-center animate-zoomIn">
      <img
        src={FeatureImage2}
        alt="AI-Driven Guidance"
        className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4"
      />
      <p className="font-semibold">AI-Driven Guidance</p>
    </div>

    <div className="flex flex-col items-center animate-zoomIn">
      <img
        src={FeatureImage3}
        alt="Compassionate Support"
        className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4"
      />
      <p className="font-semibold">Compassionate Support</p>
    </div>
  </div>
</section>


      {/* Support Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-violet-400 animate-fadeIn">
            Need Support?
          </h2>
          <p className="text-gray-400 mb-8">
            If you have any questions or need assistance, feel free to reach out to our support team.
          </p>
          <button className="bg-violet-700 py-2 px-6 rounded-full text-white hover:bg-violet-800 transition duration-300 flex items-center justify-center gap-2 mx-auto">
            <SupportIcon className="w-6 h-6" />
            Contact Support
          </button>
          <ContactSupport/>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
