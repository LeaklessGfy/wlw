const wrestlers = [
  {
    name: "Triple H",
    img: "https://www.therichest.com/wp-content/uploads/Triple-H-.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10
    }
  },
  {
    name: "John Cena",
    img: "https://www.wowkeren.com/images/photo/john_cena.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10
    }
  },
  {
    name: "Randy Orton",
    img:
      "http://www.borntoworkout.com/wp-content/uploads/2016/02/Randy-Orton-Body-300x300.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10
    }
  }
];

export const getWrestlers = array => {
  const [first, second] = wrestlers;
  return [first, second];
};

export default wrestlers;
