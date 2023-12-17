import React from "react";
import styles from "./baucua.module.scss";
import cn from "classnames";
import TienThuong from "./TienThuong";
import BanCo from "./BanCo";
import XucXac from "./XucXac";

const BauCua = () => {
  return (
    <div className={cn(styles.header, "container-fluid bg-dark")}>
      <h1 className="text-danger text-center pt-3">SÒNG BẦU CUA</h1>
      <TienThuong />

      <div className="row">
        <div className="col-sm-8">
          <BanCo />
        </div>
        <div className="col-sm-4">
          <XucXac />
        </div>
      </div>
    </div>
  );
};

export default BauCua;
