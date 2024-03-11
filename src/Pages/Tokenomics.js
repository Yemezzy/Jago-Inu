import React from 'react'

const Tokenomics = () => {
  return (
    <div>
      <div className="mt-[7%] md:text-2xl text-[#e1e1e1] px-5 md:px-14">
        <div className="border-[#dacb31] w-full md:w-[70%] border-t-4 md:absolute right-10"></div>
        <p className="text-[#dacb31] md:text-5xl font-semibold md:py-7 py-5 text-2xl">
          Tokenomics
        </p>

        <div className="md:flex">
          <section className="md:w-[50%] text-2xl p-5">
            <div className="flex gap-2 md:text-3xl">
              <p>Name:</p>
              <p className="font-bold">JAGO INU</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-5 md:text-3xl">
              <p>Symbol:</p>
              <p className="font-bold">JGI</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-5 md:text-3xl">
              <p>Token Chain:</p>
              <p className="font-bold">BSC</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-5 md:text-3xl">
              <p>Total Supply:</p>
              <p className="font-bold">100,000,000</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-5 md:text-3xl">
              <p>Decimal:</p>
              <p className="font-bold">18</p>
            </div>
          </section>

          <section className="mm md:block flex justify-center">
            <img
              className="md:mt-0 mt-5 md:pl-10"
              src="https://media.discordapp.net/attachments/984946843488247929/1216559198629007430/lkl.png?ex=6600d40b&is=65ee5f0b&hm=2431b277331601861338e33ae5d71425b2ac5f6b20cc566d1da4656e5b13706f&=&format=webp&quality=lossless"
              alt=""
            />
          </section>
        </div>

        <div className="border-[#dacb31] w-full mt-7  border-t-4 "></div>
        <div className="border-[#dacb31] pb-10 w-full mt-7  border-t-4 "></div>
      </div>
    </div>
  );
}

export default Tokenomics