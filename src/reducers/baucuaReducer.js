import { act } from "react-dom/test-utils";
import { CHANGE_SCORE, PLAY_GAME } from "../constants/baucuaConstants";

const initialState = {
  tienThuong: 500,
  danhSachCuoc: [
    { ma: "nai", diemCuoc: 0 },
    { ma: "bau", diemCuoc: 0 },
    { ma: "ga", diemCuoc: 0 },
    { ma: "ca", diemCuoc: 0 },
    { ma: "cua", diemCuoc: 0 },
    { ma: "tom", diemCuoc: 0 },
  ],
  xucXac: ["nai", "cua", "ga"],
};

const XUC_XAC = ["nai", "bau", "ga", "ca", "cua", "tom"];

const baucuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE: {
      const { ma, diemCuoc } = action.payload;

      const tienThuong = state.tienThuong - diemCuoc;
      const index = state.danhSachCuoc.findIndex((item) => item.ma === ma);

      if (tienThuong < 0) {
        return state;
      }

      if (state.danhSachCuoc[index].diemCuoc === 0 && diemCuoc < 0) {
        return state;
      }

      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === ma) {
          return { ...item, diemCuoc: item.diemCuoc + diemCuoc };
        }
        return item;
      });

      return { ...state, tienThuong, danhSachCuoc };
    }

    case PLAY_GAME: {
      //random xúc xắc
      const xucXac = state.xucXac.map((item) => {
        const index = Math.floor(Math.random() * 5);
        return XUC_XAC[index];
      });

      // lọc ra danh sách các quân cờ có đặt cược
      const danhSachCuoc = state.danhSachCuoc.filter((item) => item.diemCuoc);

      danhSachCuoc.forEach((item) => {
        const isExisted = xucXac.some((x) => x === item.ma);
        if (isExisted) {
          state.tienThuong += item.diemCuoc;
        }
      });

      // Xử lý tiền thắng cược, duyệt qua danh sách xúc xắc, kiểm tra xem có trùng với danh sách cược hay không
      xucXac.forEach((x) => {
        const item = danhSachCuoc.find((item) => item.ma === x);
        console.log(item);
        if (item) {
          state.tienThuong += item.diemCuoc;
        }
      });

      // reset điểm cược
      const danhSach = state.danhSachCuoc.map((item) => ({
        ...item,
        diemCuoc: 0,
      }));

      return { ...state, xucXac, danhSachCuoc: danhSach };
    }
    default:
      return state;
  }
};

export default baucuaReducer;
