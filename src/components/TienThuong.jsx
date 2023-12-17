import React from "react";
import styles from "./baucua.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

const TienThuong = () => {
  const { tienThuong } = useSelector((state) => state.baucua);

  return (
    <div className="d-flex justify-content-center">
      <h3 className={cn(styles.score, "p-3 bg-warning")}>
        <span className="me-2">Tiền thưởng: </span>
        <span className="text-success ">{tienThuong}</span>
      </h3>
    </div>
  );
};

export default TienThuong;
