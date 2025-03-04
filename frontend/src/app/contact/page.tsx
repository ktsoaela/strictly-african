import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 text-black">
      <h1 className="text-4xl font-bold border-b-4 border-red-600 pb-2">Contact Us</h1>
      <p className="mt-4 text-lg">
        Have a story tip or want to get in touch? Contact the Strictly African team.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Get in Touch</h2>
        <p className="mt-2 text-lg">We value your feedback and inquiries. Reach us through the following channels:</p>
        
        <ul className="list-disc pl-5 mt-2 text-lg">
          <li>Email: <a href="mailto:contact@strictlyafrican.com" className="text-blue-500">contact@strictlyafrican.com</a></li>
          <li>Phone: <span className="font-semibold">+27 123 456 789</span></li>
          <li>Address: <span className="font-semibold">Johannesburg, South Africa</span></li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Follow Us</h2>
        <p className="mt-2 text-lg">Stay connected on our social media platforms:</p>
        <ul className="list-disc pl-5 mt-2 text-lg">
          <li><a href="#" className="text-blue-500">Facebook</a></li>
          <li><a href="#" className="text-blue-500">Twitter</a></li>
          <li><a href="#" className="text-blue-500">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
