import { DDT } from "./cards";

const wrestlers = [
  {
    uid: "h",
    name: "Triple H",
    img: "https://www.therichest.com/wp-content/uploads/Triple-H-.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10,
      max: 10
    },
    intensity: {
      val: 5,
      max: 10
    },
    hand: [DDT]
  },
  {
    uid: "cena",
    name: "John Cena",
    img: "https://www.wowkeren.com/images/photo/john_cena.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10,
      max: 10
    },
    intensity: {
      val: 0,
      max: 10
    },
    hand: [DDT]
  },
  {
    uid: "orton",
    name: "Randy Orton",
    img:
      "http://www.borntoworkout.com/wp-content/uploads/2016/02/Randy-Orton-Body-300x300.jpg",
    health: {
      val: 100,
      max: 100
    },
    stamina: {
      val: 10,
      max: 10
    },
    intensity: {
      val: 0,
      max: 10
    },
    hand: [DDT]
  }
];

export default wrestlers;
