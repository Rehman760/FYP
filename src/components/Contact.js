import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium mb-4">Contact Us</h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <h3 className="text-xl font-medium mb-4">Address</h3>
            <p className="text-base mb-4">
              Nisar Ahmed Siqqidique Road <br />
              Sukkur, Sindh Pakistan
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <h3 className="text-xl font-medium mb-4">Phone</h3>
            <p className="text-base mb-4">
              (123) 456-7890
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <h3 className="text-xl font-medium mb-4">Email</h3>
            <p className="text-base mb-4">
              info@financeforeducation.com
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <h3 className="text-xl font-medium mb-4">Social Media</h3>
            <p className="text-base mb-4">
              <a href="#" className="text-blue-500">Facebook</a> <br />
              <a href="#" className="text-blue-500">Twitter</a> <br />
              <a href="#" className="text-blue-500">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
