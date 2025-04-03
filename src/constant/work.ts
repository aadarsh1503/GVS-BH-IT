const works = [
  {
    id: 0,
    name: 'Mobile App Development',
    thumbnail: '/images/work/work1.jpg',
    url: '',
    description: `If you’re looking for the finest mobile apps with stunning graphics and ultimate user-friendliness, you’re in the right place.Ochobase cyphers your ideas into reality by developing the world’s best mobile application services for your all business needs.
.`,
  },
  {
    id: 1,
    name: 'Taxi Booking App',
    thumbnail: '/images/work/work2.jpg',
    description:
      'Modernize your business with a complete taxi dispatch solution.Save time, reduce costs and take control of your business with your own taxi dispatch software.',
    url: '',
  },
  {
    id: 2,
    name: 'Food Delivery App',
    thumbnail: '/images/work/work3.jpg',
    url: '',
    description:
      'Eat what you like, where you like, when you like. Find the local flavours you crave, all at the tap of a button.Browse local restaurants and fast food favorites for inspiration. Or get just what you’re looking for by searching for a specific restaurant, dish or cuisine.',
  },
];

export default works;
export type WorkIn = (typeof works)[number];
//testdata
