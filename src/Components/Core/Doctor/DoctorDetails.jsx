import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Common/Navbar';
import Footer from '../../Common/Footer';

// Sample doctor data with additional details
const doctors = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    specialization: 'Cardiologist',
    email: 'alice.johnson@example.com',
    experience: '10 years',
    contact: '123-456-7890',
    bio: 'Dr. Alice Johnson is a leading cardiologist with over a decade of experience in treating heart diseases.',
    image: 'https://kyruus-app-static.kyruus.com/providermatch/norton/photos/500/johnson-alice-1124343892.jpg',
  },
  {
    id: 2,
    name: 'Dr. Robert Smith',
    specialization: 'Neurologist',
    email: 'robert.smith@example.com',
    experience: '8 years',
    contact: '987-654-3210',
    bio: 'Dr. Robert Smith specializes in neurological disorders and has helped countless patients recover.',
    image: 'https://www.bmhsc.org/sites/default/files/hg_features/hg_provider/2ca38ac6d7767910bb407b60b9021292.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialization: 'Dermatologist',
    email: 'emily.davis@example.com',
    experience: '12 years',
    contact: '555-123-4567',
    bio: 'Dr. Emily Davis is an expert dermatologist known for her effective skin care treatments.',
    image: 'https://cdn.prod.website-files.com/649cf93125b18c6546228247/649e24027c9c43cccfec1f5f_6I1A0650.jpg',
  },
  {
    id: 4,
    name: 'Dr. John Miller',
    specialization: 'Pediatrician',
    email: 'john.miller@example.com',
    experience: '15 years',
    contact: '444-555-6666',
    bio: 'Dr. John Miller is a pediatrician with a special interest in child development and preventive health.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCwK6fqknqFoEy9VsTP3ahaMtAX63zsikYw&s',
  },
  {
    id: 5,
    name: 'Dr. Susan Lee',
    specialization: 'Orthopedic Surgeon',
    email: 'susan.lee@example.com',
    experience: '20 years',
    contact: '777-888-9999',
    bio: 'Dr. Susan Lee is an orthopedic surgeon specializing in joint replacement and sports injuries.',
    image: 'https://womensimaging.center/wp-content/uploads/2019/08/dr-susan-lee.jpg',
  },
  {
    id: 6,
    name: 'Dr. Priya Sharma',
    specialization: 'General Practitioner',
    email: 'priya.sharma@example.com',
    experience: '22 years',
    contact: '987-654-3210',
    bio: 'Dr. Priya Sharma is a compassionate general practitioner from India, specializing in preventive care and holistic health.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2FhcxTVimZ0T8bpj3UGAABNbmeOdDogOFItcQmJLFwO7VYIbevJiFHYRvnbXpeIdSaA&usqp=CAU',
  }  
];

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center text-white">Doctor not found.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-black to-violet-900 min-h-screen flex flex-col text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-16 flex-grow mt-24">
        <h1 className="text-4xl font-bold mb-6">{doctor.name}</h1>
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-lg mb-2"><strong>Specialization:</strong> {doctor.specialization}</p>
        <p className="text-lg mb-2"><strong>Email:</strong> {doctor.email}</p>
        <p className="text-lg mb-2"><strong>Experience:</strong> {doctor.experience}</p>
        <p className="text-lg mb-2"><strong>Contact:</strong> {doctor.contact}</p>
        <p className="text-lg mb-4"><strong>Bio:</strong> {doctor.bio}</p>

        <Link to="/doctors" className="bg-violet-700 hover:bg-violet-800 px-6 py-2 rounded-md transition-colors duration-300">
          Back to Doctor Support
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorDetailsPage;
