import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm border-y border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="w-32 h-12 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-400">Client 1</span>
          </div>
          <div className="w-32 h-12 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-400">Client 2</span>
          </div>
          <div className="w-32 h-12 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-400">Client 3</span>
          </div>
          <div className="w-32 h-12 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-400">Client 4</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;