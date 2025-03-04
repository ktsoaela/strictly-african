import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 text-black">
      <h1 className="text-4xl font-bold border-b-4 border-red-600 pb-2">About Strictly African</h1>
      <p className="mt-4 text-lg">
        Strictly African is your go-to source for the latest news, culture, and entertainment from across Africa.
        We are dedicated to delivering accurate, engaging, and timely news that reflects the richness and diversity of the continent.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Our Mission</h2>
        <p className="mt-2 text-lg">
          Our mission is to amplify African voices, celebrate our heritage, and provide a trusted news platform
          that connects communities across the globe.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Why Choose Us?</h2>
        <ul className="list-disc pl-5 mt-2 text-lg">
          <li>Unbiased reporting on African news and events.</li>
          <li>In-depth analysis of political, economic, and cultural issues.</li>
          <li>Highlighting African innovation, creativity, and success stories.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
