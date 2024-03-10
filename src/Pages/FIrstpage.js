import React from "react";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


export const FIrstpage = () => {
  return (
    <div className="">
      <div className="pb-3 md:px-3 h-[80%] first-page border-white border-b-4">
        <div className="flex md:hidden h-[130px] shoi  p-5">
          <section className="md:ml-20 lg:mt-[20] mt-[12%] md:mt-[10%] vvs rounded-full w-[110px] h-[110px] text-center bg-[#142028] border-8 border-white">
            <p className="pt-[70%] text-white text-xs font-bold">JAGO INU</p>
          </section>
        </div>
        <div className="md:h-[200px] hidden md:block h-[150px] sho  p-5">
          <div className="flex justify-between">
            <section className="md:ml-20 mt-[25%] md:mt-[10%] vvs rounded-full w-[150px] h-[150px] text-center bg-[#142028] border-8 border-white">
              <p className="pt-[75%] text-white font-bold">JAGO INU</p>
            </section>
            <section className="ml-7 flex gap-5 text-lg font-semibold items-center text-[#dacb31] md:mt-[15%]  text-center  border-white">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Tokenomics</a>
              <a href="">Whitepaper</a>
            </section>
          </div>
        </div>
      </div>

      <div className="md:mt-14 py-14 vvv md:p-14 bbn text-xl text-[#e1e1e1]">
        <p className="md:text-5xl text-2xl font-bold text-center mt-10">
          JAGO INU Revolutionizing Football Predictions with Blockchain
        </p>
        {/* <p>
          Welcome to JAGO INU, where Holders of token can express their
          thoughts, make predictions, and engage in the excitement of UEFA
          Champions League matches like never before.
        </p>
        <p className="mt-2">
          {" "}
          The project JAGO INU is Inspired by the UEFA Champions League, where
          holders will earn rewards on every correct predictions being made.
        </p> */}
      </div>

      <div className="text-right px-14">
        <div className="flex gap-5 justify-center  pb-5 text-[#dacb31] ">
          <a href="">
            <FaTelegramPlane className="md:text-5xl text-3xl " />
          </a>
          <a href="">
            <FaTwitter className="md:text-5xl text-3xl" />
          </a>
          <a href="">
            <FaYoutube className="md:text-5xl text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FIrstpage;

