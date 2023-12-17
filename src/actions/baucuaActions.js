import { CHANGE_SCORE, PLAY_GAME } from "../constants/baucuaConstants";

export const playGame = () => {
  return {
    type: PLAY_GAME,
  };
};

export const changeScore = (ma, diemCuoc) => {
  return {
    type: CHANGE_SCORE,
    payload: { ma, diemCuoc },
  };
};
