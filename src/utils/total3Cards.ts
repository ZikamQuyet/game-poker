const total3Cards = (cards: string[]) => {
  let arrNew: any = [];
  cards.forEach((item) => arrNew.push(item[0]));
  let total: number = arrNew.reduce(
    (accumulator: number, currentValue: string) => {
      if (currentValue === "A") return accumulator + 1;
      return accumulator + +currentValue;
    },
    0
  );
  if (total >= 10) {
    if (+total.toString()[1] === 0) return 10;
    return +total.toString()[1];
  }
  return total;
};
export default total3Cards;
