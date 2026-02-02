import { MenuItem } from './types';

export const RESTAURANT_INFO = {
  name: "Dar el Bey",
  tagline: "Taste, Health & Cleanliness",
  phone: "26 772 675",
  email: "oaba945@gmail.com",
  location: "Khzema, Sousse, Tunisia, 4023",
  logoUrl: "https://i.ibb.co/cX60DrkL/473688593-122095645700731720-6845952682103432515-n.jpg",
  philosophy: "In Dar el Bey, everything is cooked with olive oil! Everything is well balanced, and the food is delicious and fulfilling!",
  social: {
    facebook: "#"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: "Royal Couscous",
    description: "Hand-rolled semolina steamed over a broth of lamb, seasonal vegetables, and chickpeas. Drizzled with our signature virgin olive oil.",
    price: "35 TND",
    category: "Main",
    image: "https://picsum.photos/600/400?random=1",
    isSpecialty: true
  },
  {
    id: '2',
    name: "Ojja Merguez",
    description: "Spicy Tunisian scrambled eggs with homemade lamb sausages, tomatoes, peppers, and garlic.",
    price: "18 TND",
    category: "Starter",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: '3',
    name: "Brik a l'Oeuf",
    description: "Crispy pastry triangle filled with fresh parsley, tuna, capers, and a runny egg. Fried to golden perfection.",
    price: "8 TND",
    category: "Starter",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: '4',
    name: "Lamb Gargoulette",
    description: "Slow-cooked lamb in a clay pot, sealed and cooked in embers. Incredible tenderness and flavor.",
    price: "42 TND",
    category: "Main",
    image: "https://picsum.photos/600/400?random=4",
    isSpecialty: true
  },
  {
    id: '5',
    name: "Zrir & Assida",
    description: "Traditional sweet hazelnut cream dessert topped with sesame seeds and dried fruits.",
    price: "12 TND",
    category: "Dessert",
    image: "https://picsum.photos/600/400?random=5"
  },
  {
    id: '6',
    name: "Grilled Sea Bream",
    description: "Fresh catch from the Mediterranean, grilled with fennel and lemon, served with tastira.",
    price: "38 TND",
    category: "Main",
    image: "https://picsum.photos/600/400?random=6"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the virtual Maître D' of Dar el Bey, a prestigious traditional restaurant in Sousse, Tunisia.
Our philosophy is: "Taste, health, and cleanliness!! At Dar el Bey, everything is cooked with olive oil! Everything is well balanced."
Your goal is to recommend dishes from the following menu to customers based on their preferences.
Menu: ${JSON.stringify(MENU_ITEMS)}
Keep your responses short, elegant, and appetizing. Always mention that we use healthy olive oil.
If asked about contact info: Phone ${RESTAURANT_INFO.phone}, Located in ${RESTAURANT_INFO.location}.
`;
