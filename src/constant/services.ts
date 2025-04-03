import Marketing from '~/images/services/branding.svg'; // Replace with the correct image path
import MobileApps from '~/images/services/design.svg'; // Replace with the correct image path
import Ecommerce from '~/images/services/development.svg'; // Replace with the correct image path

const services = [
  {
    id: 0,
    Icon: MobileApps,
    heading: 'Mobile Apps Development',
    description: '',
    points: [
      'Custom Mobile Application Development (iOS, Android)',
      'Cross-Platform App Development (React Native, Flutter)',
      'Mobile App UI/UX Design',
      'Backend Integration and API Development',
      'Mobile App Maintenance and Support',
      'App Testing and Quality Assurance',
      'Performance Optimization',
      'App Security and Compliance',
    ],
  },
  {
    id: 1,
    Icon: Ecommerce,
    heading: 'E-Commerce Service Management',
    description: '',
    points: [
      'E-Commerce Website Development (Shopify, WooCommerce)',
      'Payment Gateway Integration',
      'Inventory Management Solutions',
      'User Experience (UX) Design for E-Commerce',
      'E-Commerce Analytics and Reporting',
      'Digital Marketing Strategies for E-Commerce',
      'Customer Relationship Management (CRM) Integration',
      'Support and Maintenance Services',
    ],
  },
  {
    id: 2,
    Icon: Marketing,
    heading: 'Integrated Marketing Solutions',
    description: '',
    points: [
      'Search Engine Optimization (SEO)',
      'Content Marketing Strategy and Creation',
      'Social Media Marketing and Management',
      'Email Marketing Campaigns and Automation',
      'Pay-Per-Click (PPC) Advertising',
      'Influencer Marketing Strategies',
      'Web Analytics and Performance Tracking',
      'Brand Strategy Development',
    ],
  },
];

export default services;
export type ServiceIn = (typeof services)[number];
