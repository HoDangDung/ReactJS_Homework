import React from "react";
import { useDispatch } from "react-redux";
import { changeScore } from "../slices/baucuaSlice";

const QuanCo = ({ item }) => {
  const dispatch = useDispatch();
  const handleChangeScore = (diemCuoc) => {
    dispatch(changeScore({ ma: item.ma, diemCuoc }));
  };
  return (
    <div className="mt-4">
      <img src={`./img/${item.ma}.png`} alt="" />
      <br />
      <br />
      <span
        className="d-flex justify-content-center align-items-center bg-warning py-2 rounded"
        style={{ width: "200px" }}
      >
        <span className="me-2">Cược: </span>
        <button
          className="btn btn-success"
          onClick={() => handleChangeScore(-100)}
        >
          -
        </button>
        <span className="mx-2">{item.diemCuoc}</span>
        <button
          className="btn btn-success"
          onClick={() => handleChangeScore(100)}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default QuanCo;
