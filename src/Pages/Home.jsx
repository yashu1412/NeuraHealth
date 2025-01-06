import React from 'react';
import { FiUser } from "react-icons/fi";
import Navbar from '../Components/Common/Navbar';
import Hero from '../Components/Core/Home/Hero';
import Features from '../Components/Core/Home/Features';
import Solutions from '../Components/Core/Home/Solutions';
import Footer from '../Components/Common/Footer';
import AI from '../Assets/ai.jpg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero className="mt-60" />

      <div className="health-care py-16 px-6 max-w-5xl mx-auto">
        
        {/* Video Section */}
        <div className="flex lg:flex-row justify-between flex-col gap-12">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-violet-700 text-transparent bg-clip-text">
              Watch our <span className="text-violet-400">overview</span> video
            </div>

            <div className="text-gray-400 text-base font-bold italic">
              Learn more about our mission and the impact of our services on mental health.
            </div>

            <div className="flex gap-5 mt-5">
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800 transition-transform transform hover:scale-110 duration-300">
                Watch Now
              </button>
              <button className="bg-transparent border-2 border-violet-700 text-violet-500 px-4 py-2 rounded-full hover:bg-violet-700 hover:text-white transition-transform transform hover:scale-110 duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[45%] hover:shadow-2xl transform transition-all duration-500">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/6C8sO_j-vuY" 
              title="Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

        </div>

        {/* Health Tips Section 1 */}
        <div className="flex lg:flex-row justify-between flex-col gap-12 mt-16">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-violet-700 text-transparent bg-clip-text">
              Unlock better <span className="text-violet-400">health</span> with personalized tips.
            </div>

            <div className="text-gray-400 text-base font-bold italic">
              Follow these expert health tips to boost your mental well-being and lead a healthier lifestyle.
            </div>

            <div className="flex gap-5 mt-5">
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800 transition-transform transform hover:scale-110 duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-violet-700 text-violet-500 px-4 py-2 rounded-full hover:bg-violet-700 hover:text-white transition-transform transform hover:scale-110 duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[45%] p-4 rounded-lg bg-gray-900 shadow-xl hover:shadow-violet-500/50 transition-shadow duration-500">
            <TypeAnimation
              sequence={[
                'Stay hydrated and maintain a balanced diet for better mental health.',
                2000,
                'Practice mindfulness and meditation to reduce stress.',
                2000,
                'Ensure regular physical activity to boost mood and overall well-being.',
                2000,
                'Establish a routine sleep schedule to improve emotional regulation.',
                2000,
              ]}
              speed={50}
              deletionSpeed={40}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-lg font-mono font-bold text-violet-400"
            />
          </div>
        </div>

        {/* Health Tips Section 2 */}
        <div className="flex lg:flex-row-reverse justify-between flex-col gap-12 mt-16">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-violet-700 text-transparent bg-clip-text">
              Take charge of your <span className="text-violet-400">health</span> today.
            </div>

            <div className="text-gray-400 text-base font-bold italic">
              Start incorporating these habits into your daily routine to see immediate benefits.
            </div>

            <div className="flex gap-5 mt-5">
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800 transition-transform transform hover:scale-110 duration-300">
                Continue with Tips
              </button>
              <button className="bg-transparent border-2 border-violet-700 text-violet-500 px-4 py-2 rounded-full hover:bg-violet-700 hover:text-white transition-transform transform hover:scale-110 duration-300">
                Explore More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[45%] p-4 rounded-lg bg-gray-900 shadow-xl hover:shadow-violet-500/50 transition-shadow duration-500">
            <TypeAnimation
              sequence={[
                'Sleep well for improved emotional regulation and stress management.',
                2000,
                'Engage in social interactions to enhance mental health and connectivity.',
                2000,
                'Take time for self-care and hobbies to unwind and recharge.',
                2000,
                'Limit screen time before bed to improve sleep quality.',
                2000,
              ]}
              speed={50}
              deletionSpeed={40}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-lg font-mono font-bold text-violet-400"
            />
          </div>
        </div>
      </div>

      <Features />
      <Solutions />
      <div className="bg-black text-white">
  {/* Section 1: Personalized Insights */}
  <section className="py-16 px-6 max-w-6xl mx-auto">
    <h2 className="text-center text-violet-400 uppercase mb-4 tracking-widest">
      Personalized Insights
    </h2>
    <h1 className="text-center text-4xl font-extrabold italic mb-6">
      Empowering Your Well-Being
    </h1>
    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Our AI-powered platform analyzes your emotional state
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Coping Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Emotional Insights</h3>
        <p className="text-gray-400 mb-4 text-center">Practical Guidance</p>
        <p className="text-sm mb-6 text-center">
          At the heart of NeuroHealth is an AI-powered mental health companion built on the MERN stack (MongoDB, Express.js, React.js, Node).
        </p>
        <button className="bg-violet-700 text-white py-2 px-6 rounded-full hover:bg-violet-800 transition duration-300">
          Try Now
        </button>
      </div>

      {/* Take Action Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start">
  <h3 className="text-lg font-semibold mb-4 text-white">Take Action</h3>

  {/* First Action */}
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center">
      <FiUser className="text-white text-2xl" />
    </div>
    <p className="font-semibold text-white">Fleurynth</p>
  </div>

  {/* Second Action */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center">
      <FiUser className="text-white text-2xl" />
    </div>
    <p className="font-semibold text-white">Parliamentelis</p>
  </div>
</div>

      {/* Real Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center">
          <FiUser className="text-white text-2xl" />
          </div>
          <p className="font-semibold">Nick Nielsmith</p>
        </div>
        <button className="bg-violet-700 text-white py-2 px-6 rounded-full hover:bg-violet-800 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  </section>

  {/* Section 2: Empowering Your Mental Health Journey */}
  <section className="bg-gray-900 py-16 px-6">
    <h2 className="text-center text-violet-400 uppercase mb-4 tracking-widest">
      Explore Our Solutions
    </h2>
    <h1 className="text-center text-4xl font-extrabold italic mb-12">
      Empowering Your <span className="text-violet-400">Mental Health Journey</span>
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={AI}
          alt="Person"
          className="w-full max-w-md rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
          <p className="text-sm text-gray-400">
            Tailored Insights for Your Unique Needs
          </p>
          <p className="text-sm mt-4">
            At NeuroHealth, we believe that everyone deserves access to personalized, evidence-based support for their mental health.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-2">Take Action</h3>
          <p className="text-sm text-gray-400">
            Unlock the Power of AI-Driven Mental Health
          </p>
          <p className="text-sm mt-4">
            NeuroHealth is an AI-powered mental health companion built on the MERN stack (MongoDB, Express.js, React.js, Node).
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
{/* Section 3: Discover NeuroHealth */}
<div className='bg-gray-900'>
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h1 className="text-center text-4xl font-extrabold italic mb-6">
    Discover <span className="text-violet-400">NeuroHealth</span>
  </h1>
  <p className="text-center text-gray-400 mb-12">
    Empowering Your Mental Health with AI-Driven Support
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Emotional Support Card */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4">➢ Emotional Support</h3>
      <p className="text-gray-400 mb-6">
        NeuroHealth's unique approach combines the power of artificial intelligence.
      </p>
      <button className="bg-violet-700 text-white py-2 px-6 rounded-full hover:bg-violet-800 transition duration-300">
        Take Action
      </button>
    </div>

    {/* Neurah Card */}
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4">Neurah</h3>
      <p className="text-gray-600 mb-6">
        Aligned-based Monotonic Responsive Assessments & Prime predictions for individual needs.
      </p>
      <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
        Discover NeuroHealth Support
      </button>
    </div>

    {/* NeuroAI Card */}
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4">NeuroAI</h3>
      <p className="text-gray-600 mb-6">
        Shifting Beacon Assessments Predictive Evidence-based Health-focused Strategies for individuals with sensitivity.
      </p>
      <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
        Get Involved & Innovate
      </button>
    </div>
  </div>
</section>
</div>
      <Footer />
    </div>
  );
}

export default Home;
