import React from "react";
import Slider from "@/components/slider/Slider";
import Intro from "@/components/intro/Intro";

import Portfolio from "@/components/portfolio/Portfolio";
import Youtube from "@/components/youtube/Youtube";
import Movie from "@/components/movie/Movie";
import Unsplash from "@/components/unsplash/Unsplash";

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />

      <Portfolio />
      <Youtube />
      <Movie />
      <Unsplash />
    </>
  );
};

export default Home;
