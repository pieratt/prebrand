export type Offer = {
  name: string;
  summary: string;
  price: string;
  compareAt?: string;
  points: string[];
};

export const customOffers: Offer[] = [
  {
    name: "Small",
    summary: "Inspiration on tap for founders who need a fresh lens.",
    price: "$5,000",
    points: [
      "1 Week",
      "2 Meetings",
      "1 Presentation",
      "Custom Concepts",
      "Research PDF",
      ".AI, .PDF",
    ],
  },
  {
    name: "Medium",
    summary: "Delivers logo and style when you already have a name.",
    price: "$9,999",
    points: [
      "2 Weeks",
      "3 Meetings",
      "2 Presentations",
      "Custom Logo",
      "Custom Style",
      "Research PDF",
      "Brand Guide",
      ".PNG, .SVG, .PDF",
    ],
  },
  {
    name: "Large",
    summary: "Delivers a unified name and logo with great mnemonics.",
    price: "$14,999",
    points: [
      "4 Weeks",
      "4 Meetings",
      "3 Presentations",
      "Custom Name",
      "Custom URL",
      "Custom Logo",
      "Custom Style",
      "Research PDF",
      "Brand Guide",
      ".PNG, .SVG, .PDF",
    ],
  },
];

export const customOldOffers: Offer[] = [
  {
    name: "Small",
    summary: "Inspiration on tap for founders who need a fresh lens.",
    price: "$5,000",
    compareAt: "$6,000",
    points: [
      "1 Week",
      "2 Meetings",
      "1 Presentation",
      "Custom Concepts",
      "Research PDF",
      ".AI, .PDF",
    ],
  },
  {
    name: "Medium",
    summary: "Delivers logo and style when you already have a name.",
    price: "$8,000",
    compareAt: "$10,000",
    points: [
      "2 Weeks",
      "3 Meetings",
      "2 Presentations",
      "Custom Logo",
      "Custom Style",
      "Research PDF",
      "Brand Guide",
      ".PNG, .SVG, .PDF",
    ],
  },
  {
    name: "Large",
    summary: "Delivers a unified name and logo with great mnemonics.",
    price: "$18,000",
    compareAt: "$22,000",
    points: [
      "4 Weeks",
      "4 Meetings",
      "3 Presentations",
      "Custom Name",
      "Custom URL",
      "Custom Logo",
      "Custom Style",
      "Research PDF",
      "Brand Guide",
      ".PNG, .SVG, .PDF",
    ],
  },
];

export const customExamples =
  "Mixed S, M, L examples: Zora.co, Mirror.xyz, Subconscious, and work for dYdX, PodBay, Opyn, Maker Dai, NFTX, Union, Automata.";
