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
  },
  {
    name: "Hot Chicken Flavored Ramen",
    price: 5.99,
    image: "assets/img/samyangRamen.jpg", 
    rating: 5,
    description: "Deliciously spicy noodle with sesame seeds and grilled seaweed flakes."
  },
  {
    name: "Traditional Vermicelli Noodles",
    price: 7.99,
    image: "assets/img/vermicelli.jpg", 
    rating: 4.5,
    description: "1.1lb bag. Traditional vermicelli noodles."
  },
  {
    name: "Fresh Arrowroot Cold Noodle",
    price: 6.99,
    image: "assets/img/arrowrootNoodle.jpg", 
    rating: 5,
    description: "2.21lb bag. Taste the authentic Korean flavor. Refreshing varieties made for the coolest dishes."
  },
  {
    name: "Red Ginseng Extract",
    price: 200.00,
    image: "assets/img/redGinseng.jpg", 
    rating: 5,
    description: "Korean Red Ginseng Extract Prime 8.46oz."
  },
  {
    name: "3 Minutes Jjajang Sauce",
    price: 2.49,
    image: "assets/img/jjajangSauce.jpg", 
    rating: 1,
    description: "Jjajang sauce ready in 3 minutes."
  },
  {
    name: "Mocha Gold Mild Coffee",
    price: 19.99,
    image: "assets/img/mochaGold.jpg", 
    rating: 4,
    description: "Maxim Mocha Gold Mild is a smooth and aromatic coffee, conveniently packaged in a stick with sugar and milk powder so you can enjoy it anywhere."
  },
  {
    name: "Peanut and Squid Ball Snack",
    price: 3.99,
    image: "assets/img/squidPeanutSnack.jpg", 
    rating: 3.5,
    description: "Peanut and Squid Ball Snack Big Size 7.12oz."
  },
  {
    name: "Ddeokbokki Sauce",
    price: 4.49,
    image: "assets/img/ddeokbokkiSauce.jpg", 
    rating: 2.5,
    description: "Ddeokbokki is a traditional Korean dish made with rice cakes and Gochujang sauce."
  },
  {
    name: "Roasted Dried Squid",
    price: 4.99,
    image: "assets/img/ohjingeo.jpg", 
    rating: 3.5,
    description: "Roasted on Hot Cooking Stone."
  },
  {
    name: "Beef Bone Broth",
    price: 6.99,
    image: "assets/img/beefBoneBroth.jpg", 
    rating: 3,
    description: "Bibigo Beef Bone Broth Soup 17.6oz."
  },
  {
    name: "Sweet Potato Bites",
    price: 2.99,
    image: "assets/img/sweetPotatoChips.jpg", 
    rating: 4.5,
    description: "Yes! Chips! Sweet Potato Bites with Black Sesame 3.5oz(100g)."
  }  
];

export interface Product {
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}