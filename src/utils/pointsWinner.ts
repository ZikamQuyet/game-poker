import total3Cards from "./total3Cards";

const pointsWinner = (data: any) => {
  let arr: any = [];
  data.forEach((element: any) => {
    arr.push(total3Cards(element.cards));
  });
  return Math.max(...arr);
};
export default pointsWinner;
