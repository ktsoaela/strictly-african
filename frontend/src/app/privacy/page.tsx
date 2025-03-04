import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 text-black">
      <h1 className="text-4xl font-bold border-b-4 border-red-600 pb-2">Privacy Policy</h1>
      <p className="mt-4 text-lg">
        At <span className="font-semibold">Strictly African</span>, we are committed to protecting your privacy. 
        This Privacy Policy outlines how we collect, use, and safeguard your personal information.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Information We Collect</h2>
        <p className="mt-2 text-lg">We may collect the following types of data:</p>
        <ul className="list-disc pl-5 mt-2 text-lg">
          <li>Personal details (such as name, email, and phone number) when you contact us.</li>
          <li>Usage data (IP address, browser type, and visited pages) for analytics.</li>
          <li>Cookies to enhance user experience.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">How We Use Your Information</h2>
        <p className="mt-2 text-lg">Your data helps us:</p>
        <ul className="list-disc pl-5 mt-2 text-lg">
          <li>Improve content and user experience.</li>
          <li>Provide customer support.</li>
          <li>Analyze website traffic and trends.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Your Rights & Choices</h2>
        <p className="mt-2 text-lg">
          You have the right to access, modify, or request deletion of your personal data. 
          To exercise these rights, contact us at <a href="mailto:privacy@strictlyafrican.com" className="text-blue-500">privacy@strictlyafrican.com</a>.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Cookies & Tracking</h2>
        <p className="mt-2 text-lg">
          We use cookies to personalize content and analyze traffic. You can manage cookie preferences in your browser settings.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">Policy Updates</h2>
        <p className="mt-2 text-lg">
          This policy may change over time. We encourage users to review it periodically.
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
  );
};

export default Privacy;
