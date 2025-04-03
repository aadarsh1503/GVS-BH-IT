const roadmap = [
  {
    id: 0,
    img: '/images/roadmap/1.jpg',
    title: 'eCommerce Platform',
    fancy: 'Development',
    description:
      'Magento, Shopify, Big Commerce and WordPress Implementations | Custom developed eCommerce Platforms - PHP,.NET | Platform Selection and Validation | Re-platforming | eCommerce Security | Payment gateway integration',
  },
  {
    id: 1,
    img: '/images/roadmap/2.jpg',
    title: 'Digital ',
    fancy: 'Marketing',
    description:
      'Persona-based client acquisition campaigns | 360˚ Media Campaign |  Email Marketing Strategy Search Engine Optimization |  Search Engine Marketing | Social Media Marketing + Strategy | Remarketing/Retargeting | Newsletter design and strategy |  Affiliate Programs |  Campaign Performance Analysis + Optimization',
  },

  {
    id: 2,
    img: '/images/roadmap/3.jpg',
    title: 'Consulting',
    fancy: '& Outsourcing',
    description:
      'Strategic Planning | Performance Analysis and Optimization | Promotion + Sales Strategy | Drop Shipping Implementation | Client Loyalty and CRM Marketplace Strategy | Content Strategy | UX Audit + Optimization | IT Support staffing ',
  },

  {
    id: 3,
    img: '/images/roadmap/4.jpg',
    title: 'Maintainence',
    fancy: '',
    description:
      'Social Maintenance | Site improvements based on data analysis | Improving load times | Moving from on-premise to cloud hosting | Product page improvements | Multimedia integration Integration of new channels | and channel-enabling | technologies | Improving cart management | Annual Maintenance ',
  },
  // {
  //   id: 4,
  //   img: '/images/roadmap/5.jpg',
  //   title: 'Launch',
  //   fancy: '& Support',
  //   description:
  //     "Once your website is launched, we'll provide ongoing support to ensure that it remains up to date and runs smoothly.",
  // },

  // {
  //   id: 5,
  //   img: '/images/roadmap/6.jpg',
  //   title: 'Continual ',
  //   fancy: 'improvement',
  //   description:
  //     "We'll work with you to continuously monitor, measure and improve your website to ensure it stays relevant and effective over time.",
  // },
];

export default roadmap;
export type RoadMapIn = (typeof roadmap)[number];
