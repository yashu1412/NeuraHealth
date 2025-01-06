import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

function DoctorSupportPage() {
  const [doctors, setDoctors] = useState([]);

 
  const Doctors = [
    {
      id: 1,
      name: 'Dr. Alice Johnson',
      specialization: 'Cardiologist',
      email: 'alice.johnson@example.com',
    },
    {
      id: 2,
      name: 'Dr. Robert Smith',
      specialization: 'Neurologist',
      email: 'robert.smith@example.com',
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialization: 'Dermatologist',
      email: 'emily.davis@example.com',
    },
    {
      id: 4,
      name: 'Dr. John Miller',
      specialization: 'Pediatrician',
      email: 'john.miller@example.com',
    },
    {
      id: 5,
      name: 'Dr. Susan Lee',
      specialization: 'Orthopedic Surgeon',
      email: 'susan.lee@example.com',
    },
    {
      id: 6,
      name: 'Dr. Priya Sharma',
      specialization: 'General Practitioner',
      email: 'priya.sharma@example.com',
    },
  ];

  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setDoctors(Doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-violet-900 min-h-screen flex flex-col">
      <Navbar />

      <section className="container mx-auto px-6 py-16 flex-grow mt-24">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-700">
          Doctor Support
        </h1>

        {doctors.length === 0 ? (
          <p className="text-center text-gray-400">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group p-6 border-2 border-violet-600 rounded-lg shadow-xl bg-zinc-50 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-violet-400">{doctor.name}</h2>
                <p className="text-gray-400 mb-2">{doctor.specialization}</p>
                <p className="text-gray-500 mb-4">{doctor.email}</p>

                <Link
                  to={`/doctors/${doctor.id}`}
                  className="group-hover:bg-violet-600 bg-violet-700 hover:bg-violet-800 px-6 py-2 rounded-md transition-colors duration-300 ease-in-out text-white"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default DoctorSupportPage;
