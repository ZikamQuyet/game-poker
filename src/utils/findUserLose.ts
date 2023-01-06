import pointsWinner from "./pointsWinner";
import total3Cards from "./total3Cards";

const findUserLose = (data: any) => {
  let count = 0;
  data.forEach((item: any) => {
    if (total3Cards(item.cards) !== pointsWinner(data)) {
      count++;
    }
  });
  return count;
};

export default findUserLose;
