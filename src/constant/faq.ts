const faq = [
  {
    id: 1,
    heading: 'How do you approach a new project?',
    ansPara: [
      'Our process starts with a discovery and consultation phase where we get to know your business, your goals, and your target audience. From there, we develop a strategic plan and move into the design and development phase. Finally, we conduct thorough testing and quality assurance before launching the project and providing ongoing support.',
    ],
  },
  {
    id: 2,
    heading: 'How long does it take to develop a website?',
    ansPara: [
      "The timeline for a project can vary depending on the size and complexity of the project, as well as the client's availability. We provide an estimated timeline during the planning phase and keep our clients informed throughout the development process.",
    ],
  },

  {
    id: 4,
    heading: 'What kind of industries do you work with?',
    ansPara: [
      'At GVS, we have experience working with  wide range of industries, including retail, healthcare, finance, technology, and more. Our team is experienced in understanding the unique needs of each industry and creating solutions that are tailored to meet those needs.',
    ],
  },
  {
    id: 6,
    heading: 'Do you work with clients from other countries?',
    ansPara: [
      'Yes, we work with clients from all over the world. Our team is experienced in working with clients from different cultures and time zones, and we have the tools and technologies to collaborate effectively regardless of location.',
    ],
  },
  {
    id: 5,
    heading:
      'Do you provide ongoing maintenance and support for the projects you develop?',
    ansPara: [
      'Yes, we provide ongoing maintenance and support to ensure that your website or brand identity remains up to date and effective over time. We understand that technology and design trends change rapidly, and we want to make sure that your website or brand identity stays relevant and effective.',
    ],
  },
  {
    id: 7,
    heading: 'How do you ensure the security of my website or application?',
    ansPara: [
      'Security is a top priority at AxStudios, and we take all necessary measures to ensure that your website or application is secure. This includes regular updates, backups, and security testing. We also provide guidance on best practices for maintaining the security of your website or application after it is launched.',
    ],
  },
];

export default faq;
export type FaqIn = (typeof faq)[number];
