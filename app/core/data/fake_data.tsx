export type Flower = {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
};

export const fakeData: Array<Flower> = [
  {
    id: 1,
    name: "Swiss Cheese Plant",
    type: "Monstera Deliciosa",
    description:
      "Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant native to tropical forests of South America such as southern Mexico, south to Panama. It is very widely grown in temperate zones as a houseplant.",
    image: "flower1.png",
  },
  {
    id: 2,
    name: "Purple Tulip",
    type: "Tulipa",
    description:
      "Tulips, with their vibrant colors and graceful petals, are beloved flowers that captivate the hearts of many. Native to Central Asia and later introduced to the Netherlands, tulips have become synonymous with beauty and elegance. These enchanting blooms come in a wide array of hues, ranging from brilliant reds and pinks to serene purples and whites, offering a visual feast for the eyes. Their unique shape, resembling delicate cups or goblets, adds to their allure. Tulips have held a special place in various cultures throughout history, symbolizing love, abundance, and springtime renewal. Their fleeting nature, as they bloom and flourish for a brief period each year, makes them even more cherished. Whether adorning gardens, brightening up bouquets, or inspiring works of art, tulips continue to enchant and inspire with their timeless grace.",
    image: "flower2.png",
  },
  //   {
  //     id: 3,
  //     name: "Swiss Cheese Plant",
  //     type: "Monstera Deliciosa",
  //     description:
  //       "Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant native to tropical forests of South America such as southern Mexico, south to Panama. It is very widely grown in temperate zones as a houseplant.",
  //     image: "flower1.png",
  //   },
];
