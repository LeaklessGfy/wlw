const wrestlers = [
  {
    name: "Triple H",
    img: "https://www.therichest.com/wp-content/uploads/Triple-H-.jpg"
  },
  {
    name: "John Cena",
    img:
      "https://img00.deviantart.net/2726/i/2017/141/7/0/john_cena_png_2017_by_ambriegnsasylum16-db9z2ji.png"
  },
  {
    name: "Batista",
    img:
      "https://orig00.deviantart.net/03ce/f/2015/333/f/7/batista_render_5_by_wwepnguploader-d9if7j7.png"
  }
];

export const getWrestlers = array => {
  const [first, second] = wrestlers;
  return [first, second];
};

export default wrestlers;
