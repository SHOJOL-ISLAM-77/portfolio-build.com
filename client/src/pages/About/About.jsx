import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are a passionate team dedicated to building amazing web experiences. Our mission is to create innovative
            solutions that empower businesses and individuals to thrive in the digital world.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-400 mb-4">CEO & Founder</p>
              <p className="text-gray-400">
                John is a visionary leader with over 10 years of experience in the tech industry.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-400 mb-4">Lead Designer</p>
              <p className="text-gray-400">Jane is a creative genius who brings ideas to life with stunning designs.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-400 mb-4">Senior Developer</p>
              <p className="text-gray-400">Alex is a coding wizard who builds robust and scalable applications.</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join us on our journey to create amazing digital experiences. Let's build something great together!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
