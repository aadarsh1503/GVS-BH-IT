// Define the type for each tech stack item
type TechStackItem = {
  name: string;
  description: string[];
};

// Sample data for the tech stack with expanded descriptions
const techStack: TechStackItem[] = [
  {
    name: 'Microsoft .NET',
    description: [
      'A framework for building applications on Windows using languages like C# and VB.NET.',
      'Supports web applications, services, and Windows-based applications.',
      'Includes various components like ASP.NET for web development, Entity Framework for database interactions, and more.',
    ],
  },
  {
    name: 'Java / J2EE',
    description: [
      'A widely-used programming language known for its platform independence via the Java Virtual Machine (JVM).',
      'Includes technologies like Spring MVC, Hibernate, and RESTful APIs for web development.',
      'Robust support for enterprise applications and large-scale systems.',
    ],
  },
  {
    name: 'Databases',
    description: [
      'Manages data storage and retrieval, with systems like SQL Server and Oracle for relational data.',
      'NoSQL options like MongoDB for unstructured data and scalability.',
      'Supports complex queries and transaction management for reliable data operations.',
    ],
  },
  {
    name: 'Mobile Apps',
    description: [
      'Android: Open-source OS by Google, enabling app development with Java/Kotlin.',
      'iOS: Apple’s OS, providing a rich development environment with Swift and Xcode.',
      'Cross-platform solutions like Xamarin and PhoneGap allow for code sharing across Android and iOS.',
    ],
  },
  {
    name: 'BI & Data Analytics',
    description: [
      'Tools for data analysis, reporting, and visualization like Tableau and Power BI.',
      'Real-time processing frameworks such as Apache Kafka and Spark for big data applications.',
      'Machine Learning and Neural Networks for predictive analytics and data-driven decision-making.',
    ],
  },
  {
    name: 'eCommerce & Web',
    description: [
      'Technologies for building online stores and websites including Magento and Shopify.',
      'Web development frameworks like WordPress, PHP, and Ruby on Rails for dynamic content creation.',
      'Responsive design practices to ensure accessibility across devices and screen sizes.',
    ],
  },
  {
    name: 'NextGen Technologies',
    description: [
      'Emerging technologies like IoT for connected devices and AI for intelligent automation.',
      'Blockchain for secure and transparent transactions across industries.',
      'Exploring the potential of augmented and virtual reality in various applications.',
    ],
  },
];

export default function ClientsSection() {
  return (
    <section id='sec-clients' className='relative bg-gray-50 py-14'>
      <div className='layout flex flex-col items-center justify-center space-y-5 lg:py-0'>
        <h2 className='heading'>
          Tech
          <span className='fancy mb-10'>Expertise</span>
        </h2>
      </div>

      {/* Tech Stack Section */}
      <div className='layout grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3'>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className='relative rounded-lg bg-blue-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'
          >
            <h3 className='text-lg font-semibold text-primary-base'>
              {tech.name}
            </h3>

            {/* Render static description */}
            <div className='mt-3 space-y-2 text-gray-700'>
              {tech.description.map((desc, i) => (
                <li key={i} className='flex items-start'>
                  <span className='mr-2 text-blue-500'>•</span> {desc}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
