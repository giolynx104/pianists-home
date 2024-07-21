type Pianist = {
  id: number;
  name: string;
  imageKey: string;
  description: string;
  demoLink: string;
};

export const data: Pianist[] = [
  {
    id: 1,
    name: "Đặng Thái Sơn",
    imageKey: "1",
    description:
      "Dang Thai Son was propelled to the forefront of the musical world in October 1980, when he was awarded the First Prize and Gold Medal at the Xth International Chopin Piano Competition in Warsaw. It was also the first time that a top international competition was won by an Asian pianist.",
    demoLink: "https://www.youtube.com/watch?v=ISQ_XKwnftE",
  },
  {
    id: 2,
    name: "Irina Lankova",
    imageKey: "2",
    description:
      "Renown classical concert pianist, Irina Lankova performs on major stages worldwide, such as Carnegie Hall in New York, Wigmore Hall in London, Salle Gaveau in Paris, Concertgebouw in Amsterdam, L’Esprit du piano, Sagra Musicale Umbra, Cidades des Artes in Rio and many others. ",
    demoLink: "https://www.youtube.com/watch?v=17H5X5EEAg8",
  },
];

type Image = {
  [key: string]: string;
};

export const images: Image = {
  1: require("@/public/dang-thai-son.jpg"),
  2: require("@/public/irina-lankova.jpg"),
};
