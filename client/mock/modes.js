const modes = [
  {
    id: 0,
    uid: "Normal2Versus",
    name: "Normal",
    img:
      "http://cdn1.thecomeback.com/wp-content/uploads/2017/01/roman-reigns-goldberg-wwe-raw.jpg",
    description: "One vs. One",
    numbers: 2
  }
];

export const getMode = index => {
  return modes[index];
};

export default modes;
