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
    name: "Lê Xuân Hải",
    imageKey: "1",
    description:
      "Nhà soạn nhạc, nghệ sĩ dương cầm, giáo sư dạy dương cầm vĩ đại của dân tộc Việt Nam.",
    demoLink: "https://www.youtube.com/watch?v=tyMe9Eko4RQ",
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
  1: require("@/public/maxresdefault.jpg"),
  2: require("@/public/irina-lankova.jpg"),
};
