import React from 'react';
import './StudentList.css';

export const StudentList = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="NavbarDisplay NavbarAbout">
        <a
          href="https://bit.ly/3tNICGq"
          target="_blank"
          className="text-[#5172E7] w-[180px] h-[48px] rounded-full border drop-shadow-lg flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer transition-transform transform hover:scale-105 hover:drop-shadow-xl duration-300 ease-in-out"
          rel="noreferrer"
        >
          Submit Your Idea
        </a>
      </div>

      {/* Container Section */}
      <div className="container animated">
        <a
          href="./Scintfic winners.pdf"
          target="_blank"
          rel="noreferrer"
        >
          List of Winners of Ideathon 7.0
        </a>
      </div>
    </div>
  );
};
