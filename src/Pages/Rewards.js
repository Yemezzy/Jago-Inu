import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Rewards = () => {
  return (
    <div>
      <div className="mt-[7%] md:text-2xl text-[#e1e1e1] px-5 md:px-14">
        <div className="border-[#dacb31] w-full md:w-[70%] border-t-4 md:absolute right-10"></div>
        <p className="text-[#dacb31] md:text-5xl font-semibold md:py-7 py-5 text-2xl">
          Rewards
        </p>

        <p className=" md:mt-5 mt-2">
          A new token is created at the beginning of every season, the token
          created will be distributed as reward for every correct predction won.
        </p>
        <p className=" mt-2">
          At the end of the season, we burn the distributed tokens as rewards,
          while the original JAGO INU token remains active for buying and
          selling.
        </p>
        <p className=" mt-2">
          But the excitement doesn't end there. The rewards accumulate
          throughout the season, creating anticipation and engagement among the
          community.
        </p>

        <p className=" mt-2 ">
          By holding JAGO INU tokens, you gain exclusive access to prediction
          activities and opportunities to earn rewards. It's a token designed by
          fans, for fans
        </p>
        <p className=" mt-2 ">
          At the end of every season, We will do a giveway to any random holder
          a ticket to watch the champions league finals live from the stadium.
        </p>

        <p className="py-3 text-[#dacb31] text-center text-2xl font-semibold">
          How it works
        </p>
        <p>
          <span className="text-[#dacb31]">Here's how it works:</span> Before
          each match, the community sets out predictions and rewards for the
          winning team. Whether it's predicting the winner or the number of
          goals scored, there's a reward for every correct prediction.
        </p>
        <p className="py-3 text-[#dacb31] text-xl font-semibold">Example:</p>
        <p>Take A vs. B for a match prediction</p>
        <p className=" mt-2 ">
          For instance, if Team A wins the match, rewards go to those who
          predicted A's victory. If the match ends in a draw, only those who
          chose a draw are rewarded.
        </p>
        <p className=" mt-2 ">
          <span className="text-[#dacb31]">Note:</span> Rewards will
          be given to only holders of our token(JAGO INU).
        </p>
        <div className="border-[#dacb31] w-full mt-7 border-t-4 "></div>
      </div>
    </div>
  );
}

export default Rewards