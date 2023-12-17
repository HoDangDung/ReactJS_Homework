import { useState, useEffect } from "react";
import cn from "classnames";
import style from "./header.module.css";
import Netfitlogo from "../../assets/img/logo.png";
import { useSrcollY } from "../../hooks/";

const Header = () => {
  const [scrollY] = useSrcollY();

  return (
    <div
      className={`container-fluid header ${style.header}`}
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#000" }
      }
    >
      <div className={style.logo}>
        <img src={Netfitlogo} width={"100%"} />
      </div>
    </div>
  );
};

export default Header;
