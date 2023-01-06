import findUserLose from "./findUserLose";

const totalMoneyWin = (gambling: number, data: any) => {
  return (gambling * findUserLose(data)) / (data.length - findUserLose(data));
};

export default totalMoneyWin;
