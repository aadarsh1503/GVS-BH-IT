import { socialHanfle } from '@/types';

export type TeamIn = {
  id: number;
  name: string;
  tag: string;
  profileURL: string;
  about: string;
  socials: {
    name: socialHanfle;
    href: string;
  }[];
};

const team: TeamIn[] = [
  {
    id: 0,
    name: 'Riyadh Shaheen ',
    tag: 'Managing Director',
    about: '', // Added an empty string for the 'about' property
    profileURL: '/images/logo/t1.png',
    socials: [
      {
        name: 'email',
        href: 'mailto:Riyadh.shaheen@gvs-bh.com',
      },
    ],
  },
  {
    id: 1,
    name: 'Maria Bernadeth Castro ',
    tag: 'Admin',
    about: '', // Added an empty string for the 'about' property
    profileURL: '/images/logo/t2.png',
    socials: [
      {
        name: 'email',
        href: 'mailto:operations@shaheen.express',
      },
    ],
  },
  {
    id: 2,
    name: 'Maricris Angeles ',
    tag: 'Accountant',
    about: '', // Added an empty string for the 'about' property
    profileURL: '/images/logo/t3.png',
    socials: [
      {
        name: 'email',
        href: 'mailto:finance@gvscargo.com',
      },
    ],
  },
  {
    id: 3,
    name: 'Asman Rahim',
    tag: 'Asst. IT Officer',
    about: '', // Added an empty string for the 'about' property
    profileURL: '/images/logo/t4.png',
    socials: [
      {
        name: 'email',
        href: 'mailto:technology@gvs-bh.com',
      },
    ],
  },
  {
    id: 4,
    name: 'Gurusewak Singh',
    tag: 'Database Analyst',
    about: '', // Added an empty string for the 'about' property
    profileURL: '/images/logo/t5.png',
    socials: [
      {
        name: 'email',
        href: 'mailto:info@gvs-bh.com',
      },
    ],
  },
  {
    id: 7,
    name: 'Santhosh kumar T',
    tag: 'It specialist',
    profileURL: '/images/logo/i11.jpg',
    about: '', // Added an empty string for the 'about' property
    socials: [
      {
        name: 'email',
        href: 'mailto:software@gvs-bh.com',
      },
    ],
  },
  {
    id: 8,
    name: 'Aadarsh Chauhan',
    tag: 'Web Developer',
    profileURL: '/images/logo/i222.png',
    about: '', // Added an empty string for the 'about' property
    socials: [
      {
        name: 'email',
        href: 'mailto:technology@gvs-bh.com',
      },
    ],
  },
];

export default team;

// export const fakeTeam: TeamIn = {
//   id: 0,
//   name: 'Chandraprakash Darji',
//   tag: 'Founder / CTO',
//   about: 'Frontend Magician who loves to create beautiful ui with passion',
//   profileURL: 'https://github.com/Chandraprakash-Darji.png',
//   socials: [
//     {
//       name: 'linkedin',
//       href: 'https://www.linkedin.com/in/Chandraprakash-Darji',
//     },
//     {
//       name: 'twitter',
//       href: 'https://twitter.com/chandra_7852',
//     },
//     {
//       name: 'github',
//       href: 'https://github.com/Chandraprakash-Darji',
//     },
//   ],
// };
