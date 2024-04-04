import { Link } from "react-router-dom";
import first from "../assets/first.jpg";

export function Landing() {
  return (
    <Link to={'/location'}>
      <div className="mt-36 h-[60vh] relative">
        <div className="m-6 mt-28 h-80 rounded-2xl lg:m-20 lg:mx-48 lg:h-80 lg-mt-6 ">
          <div className="absolute mt-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center">
            <h1 className="text-3xl font-bold text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>An emergency?</h1>
            <h1 className="text-6xl font-extrabold mt-8 text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Find nearby services</h1>
          </div>
          <img
            src={first}
            alt="First"
            className="w-full h-full rounded-xl object-cover opacity-90"
          />
          <div className="h-20 flex items-center justify-center ">
            <div className="w-[40%] lg:w-[55%] h-16 bg-white rounded-3xl mb-20 z-50 border-2 border-black flex justify-between items-center px-12 lg:px-20">
              <div className="flex flex-col items-center">
                <h3>Nearest Center</h3>
                <p className="text-xs">Where to Go?</p>
              </div>
              <div className="border-l-2 border-gray-600"></div>
              <div className="flex flex-col items-center">
                <h3>Doctor's Name</h3>
                <p className="text-xs">Choose</p>
              </div>
              <div className="border-l border-gray-300"></div>
              <div className="flex flex-col items-center">
                <h3>Specialization</h3>
                <p className="text-xs">What you need</p>
              </div>
              <button className="bg-green-600 text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}