import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      </nav>

      <h1 className='head_text'>
      Condense articles using <br className='max-md:hidden' />
        <span className='orange_gradient '>Minify</span>
      </h1>
      <h2 className='desc'>
      Minify Your solution for streamlined reading. Harnessing AI technology, Minify distills lengthy articles into crisp, digestible summaries, making information accessible and easy to comprehend

      </h2>
    </header>
  );
};

export default Hero;
