import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 w-1/2 text-center flex justify-center items-center flex-col h-screen">
      <div className=" bg-gray-50 p-12 rounded-2xl border">
        <h1 className="text-3xl font-bold mb-4">Contact </h1>
        <p className="text-2xl mb-8">
          {" "}
          <span className=" font-bold text-4xl">👋</span>Hii Foodies, let's
          connect with us!
        </p>
        <div className="flex justify-center items-center space-x-6">
          <div className="flex flex-col items-center text-blue-500 hover:text-blue-600 cursor-pointer">
            <FaFacebook className="w-12 h-12" />
            <span>Facebook</span>
          </div>
          <div className="flex flex-col items-center text-blue-400 hover:text-blue-500  cursor-pointer">
            <FaTwitter className="w-12 h-12" />
            <span>Twitter</span>
          </div>
          <div className="flex flex-col items-center text-pink-500 hover:text-pink-600  cursor-pointer">
            <FaInstagram className="w-12 h-12" />
            <span>Instagram</span>
          </div>
          {/* Add more social media links as needed */}
        </div>
        <div className="mt-8 text-center">
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main Street, City, Country</p>
          {/* Add additional contact details */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
