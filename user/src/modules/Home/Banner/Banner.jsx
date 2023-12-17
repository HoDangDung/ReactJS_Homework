import React, { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import style from "./banner.module.css";
import cn from "classnames";
import Slider from "react-slick";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await movieAPI.getBanners();
      setBanners(data);
    })();
  }, []);

  const render = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider>
        {banners.map((item) => (
          <img
            className={`${style.bannerImg}`}
            key={item.maBanner}
            src={item.hinhAnh}
            alt={`banner-${item.maBanner}`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
