import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="mt-[7%] abt bg-cover md:text-2xl text-[#e1e1e1] px-5 md:px-14">
        <div className="border-[#dacb31] w-full md:w-[70%] border-t-4 md:absolute right-10"></div>
        <p className="text-[#dacb31] md:text-5xl font-semibold md:py-7 py-5 text-2xl">
          About Us
        </p>

        <p className=" md:mt-5 mt-2">
          Welcome to JAGO INU, where football enthusiasts can engage in match
          predictions and community activities while earning rewards.
        </p>
        <p className=" mt-2">
          Inspired by the UEFA Champions League, JAGO INU offers a unique
          platform for fans to express their thoughts and make predictions on
          match outcomes.
        </p>

        {/* <p className="py-3 text-[#dacb31] text-2xl">Benefits:</p> */}
        <p className=" mt-2">
          It is a community where fans from around the globe come together to
          share their insights, analyze the game, and predict outcomes.
        </p>

        <p className=" mt-2">
          With Jago Inu, Holders can use tokens to back their predictions and
          compete for rewards. It's more than just watching the game – it's
          actively participating in the action.
        </p>
        <p className=" mt-2">
          Whether you're a die-hard supporter or a casual fan, Jago Inu offers
          something for everyone. Join the conversation, make your predictions,
          and be part of the excitement.
        </p>
        <p className=" mt-2 pb-7">
          But Jago Inu isn't just about predictions. It's a platform for
          meaningful discussions, where fans can share their opinions, debate
          strategies, and connect with like-minded enthusiasts.
        </p>
        <div className="border-[#dacb31] w-full  border-t-4 "></div>
      </div>
    </div>
  );
}

export default AboutUs