export const products: Product[] = [
  {
    name: "Rice Cooker, 10 Cups",
    price: 712.99,
    image: "assets/img/riceCooker10.jpg", 
    rating: 5,
    description:
      "A 10 cup induction heating rice cooker with a LCD touch screen, in rose gold"
  },
  {
    name: "Rice Cooker, 6 Cups",
    price: 449.99,
    image: "assets/img/riceCooker6.jpg", 
    rating: 3.5,
    description:
      "A 6 cup stainless steel rice cooker with ventiliation pipe system"
  },
  {
    name: "Cabbage Kimchi",
    price: 9.49,
    image: "assets/img/cabbageKimchi.jpg", 
    rating: 4.5,
    description: ""
  },
  {
    name: "Cubed Radish Kimchi",
    price: 9.49,
    image: "assets/img/radishKimchi.jpg", 
    rating: 4,
    description: ""
  },
  {
    name: "Cucumber Kimchi",
    price: 9.49,
    image: "assets/img/cucumberKimchi.jpg", 
    rating: 5,
    description: ""
  },
  {
    name: "Beef Kalbi Marinade",
    price: 6.99,
    image: "assets/img/kalbiMarinade.jpg", 
    rating: 4.5,
    description: "Korean Style BBQ Sauce Beef Kalbi Marinade 1.85lb"
  },
  {
    name: "Shin Ramyun",
    price: 4.99,
    image: "assets/img/shinRamyun.jpg", 
    rating: 3,
    description: "Pack of 4. Soft and chewy noodle combined with spicy beef broth creates the perfect recipe for any time of day or setting."
  },
  {
    name: "Shrimp Cracker",
    price: 1.29,
    image: "assets/img/shrimpCracker.jpg", 
    rating: 2.5,
    description: "Shrimp Cracker is a crunchy, aromatic snack with delicious Shrimp flavor."
  },
  {
    name: "Rice, 15lb",
    price: 21.99,
    image: "assets/img/rice15.jpg", 
    rating: 3.5,
    description: ""
  },
  {
    name: "Gochujang",
    price: 7.99,
    image: "assets/img/gochujang.jpg", 
    rating: 4,
    description: "Hot pepper paste, 1.1lb"
  },
  {
    name: "Rubber Gloves",
    price: 2.99,
    image: "assets/img/gloves.jpg", 
    rating: 3,
    description: "Best rubber gloves for cleaning and washing dishes. Pink."
  },
  {
    name: "Banana Milk",
    price: 7.99,
    image: "assets/img/bananaDrink.jpg", 
    rating: 2,
    description: "Banana milk is a delicious and energizing beverage with creamy banana flavor."
  }
];

export interface Product{
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}