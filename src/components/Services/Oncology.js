import React from 'react';
import { Link } from 'react-router-dom';

export default function Oncology() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center">
        <div className="image text-center">
          <img className="rounded-3xl" src={require('./oncology1.avif')} alt="Ayurveda"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Oncology <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify">
           Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.
           Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. 
           It encompasses a wide range of disciplines, including medical oncology, surgical oncology, and radiation oncology. 
           Medical oncologists specialize in using chemotherapy, targeted therapy, immunotherapy, and other medications to treat cancer. 
           Surgical oncologists perform surgical procedures to remove tumors and cancerous tissues, 
           often working in conjunction with other specialists. Radiation oncologists use radiation therapy 
           to target and destroy cancer cells while minimizing damage to surrounding healthy tissues
          </p>
           <div className="mt-6 flex justify-center content-center">
            <Link to="/book_appointment">
              <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 bg-cyan-500 text-white font-semibold uppercase   hover:text-black hover:border-blue-500 hover:bg-cyan-200">
                Book Appoinment
              </button>
            </Link> 
          </div> 
        </div>
      </div>
    </div>
  );
}
