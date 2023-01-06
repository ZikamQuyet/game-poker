const randomItem = (items: string[]) => {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * items.length);
    result.push(items[index]);
    items.splice(index, 1);
  }
  return { items, result };
};

export default randomItem;
