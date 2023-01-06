interface IUser {
  id: string;
  name: string;
  avatar: string;
  money: number;
  cards: string[];
  player: number;
}

export const dataUser: IUser[] = [
  {
    id: "user1",
    name: "Zika",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    money: 10000,
    cards: [],
    player: 1,
  },
  {
    id: "user2",
    name: "John",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    money: 10000,
    cards: [],
    player: 2,
  },
  {
    id: "user3",
    name: "Lisa",
    avatar:
      "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    money: 10000,
    cards: [],
    player: 3,
  },
  {
    id: "user4",
    name: "Peter",
    avatar:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    money: 10000,
    cards: [],
    player: 4,
  },
];
