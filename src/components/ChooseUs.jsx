import React from "react";
import ladki from "../assets/ladki.png";

function ChooseUs() {
  return (
    <div className="bg-white h-[70vh] w-full ">
      <div className="flex items-center justify-evenly w-[80%] ml-32">
        <img src={ladki} alt="First" className="h-[30rem] object-cover" />
        <div>
          <h1 className="text-5xl font-bold text-emerald-600 "> Why Choose Us?</h1>
          <div className="ml-8 mt-8 leading-[3rem] font-extrabold text-xl text-zinc-700">

            <li> Safety First Quality Must</li>
            <li> Patient-Centric Approach</li>
            <li> Cutting-Edge Technology</li>
            <li> Transparent Pricing</li>
            <li> Coordinated Care</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
