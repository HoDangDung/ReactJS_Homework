import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import styles from "./baucua.module.scss";
import { playGame } from "../slices/baucuaSlice";

const XucXac = () => {
  const { xucXac } = useSelector((state) => state.baucua);
  const dispatch = useDispatch();

  const handlePlayGame = () => {
    dispatch(playGame());
  };
  return (
    <div
      className={cn(
        styles.game,
        "d-flex flex-column justify-content-center align-items-center"
      )}
    >
      {xucXac.map((item, index) => (
        <img
          className="mb-3"
          key={index}
          src={`./img/${item}.png`}
          alt={item}
          width={100}
          height={100}
        />
      ))}
      <button className="btn btn-success" onClick={handlePlayGame}>
        Xốc
      </button>
    </div>
  );
};

export default XucXac;
