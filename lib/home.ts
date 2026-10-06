export type StoreCard = {
  href: string;
  title: string;
  image: string;
  price?: string;
  sold?: boolean;
  inquire?: boolean;
};

export const forSale: StoreCard[] = [
  {
    href: "/rollingflowers",
    title: "Rolling Flowers",
    image: "53prebrand_thumbnail.png",
    price: "$30,000",
  },
  {
    href: "/library",
    title: "Library",
    image: "54prebrand_thumbnail.png",
    price: "$10,000",
  },
  {
    href: "/gooddamn",
    title: "GoodDamn",
    image: "57prebrand_thumbnail.png",
    price: "$5,000",
  },
  {
    href: "/thanksbud",
    title: "Thanks Bud",
    image: "58prebrand_thumbnail.png",
    price: "$20,000",
  },
  {
    href: "/artcorp",
    title: "ArtCorp",
    image: "55prebrand_thumbnail.png",
    price: "$5,000",
  },
  {
    href: "/youalwayslookgood",
    title: "You Always Look Good",
    image: "62prebrand_thumbnail.png",
    price: "$10,000",
  },
];

export const archive: StoreCard[] = [
  {
    href: "/kiln",
    title: "Kiln.fi",
    image: "67prebrand_thumbnail.png",
    price: "$10,000",
    sold: true,
  },
  {
    href: "/mined",
    title: "Mined.com",
    image: "61prebrand_thumbnail.png",
    price: "$20,000",
    sold: true,
  },
  {
    href: "/hellosaurus",
    title: "Hellosaurus.com",
    image: "59prebrand_thumbnail.png",
    price: "$10,000",
    sold: true,
  },
  {
    href: "/hessian",
    title: "Hessian.tv",
    image: "66prebrand_thumbnail.png",
    price: "$18,000",
    sold: true,
  },
];

export const inDevelopment: StoreCard[] = [
  {
    href: "/join",
    title: "Outek.co",
    image: "51prebrand_soon_1.png",
    inquire: true,
  },
  {
    href: "/join",
    title: "Father.Earth",
    image: "47prebrand_soon.png",
    inquire: true,
  },
  {
    href: "/join",
    title: "Liquix.xyz",
    image: "50prebrand_soon-2.png",
    inquire: true,
  },
  {
    href: "/join",
    title: "Early.Work",
    image: "46prebrand_soon_2.png",
    inquire: true,
  },
];
