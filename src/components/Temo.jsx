import React from "react";
import Seaturtle from "../assets/image.png"
// temo's workspace :)

const Temo = () => {
  // section
  return (
    <div className="">
      <section
        className="bg-cover bg-center h-screen flex items-center justify-between p-8 sm:flex-col sm:text-center sm:p-4"
        style={{
          backgroundImage:
            "URL(https://s28164.pcdn.co/files/iStock_000011381141Large-600x400.jpg)",
        }}
      >
        <div className="text-white container sm:mb-8">
          <h1 className="text-4xl sm:text-3xl font-semibold mb-4">ზღვის კუ</h1>
          <p className="text-lg sm:text-base mb-6">ზღვის კუები , კუების რიგი. შეიცავს 1 ოჯახს საკუთრივ ზღვის კუებს . მოზრდილი ცხოველებია, მთელ სიცოცხლეს წყალში ატარებენ. ხმელეთზე ამოდიან მხოლოდ კვერცხის დასადებად.</p>
          <p className="text-lg text-black sm:text-base mb-6">@TemoTemo</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadown-lg hovew:bg-blue-700 tranition duration-300">
            Learn More
          </button>
        </div>
        <div classname="sm:w-full sm:h-64 mt-8 sm:mt-0 sm:flex sm:jutify-center sm:items-center">
          <img src={Seaturtle} alt="sea turtle image" className="max-sm:hidden" />
        </div>
      </section>
    </div>
  );
};

export default Temo;
