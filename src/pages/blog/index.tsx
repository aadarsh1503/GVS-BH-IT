import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

import logger from '@/lib/logger';
import { getAllFilesFrontmatter } from '@/lib/mdx';

import Input from '@/components/form/Input';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { BlogFrontmatter } from '@/types/frontmatters';

export default function BlogPage({
  allPostsData,
}: {
  allPostsData: BlogFrontmatter[];
}) {
  logger(allPostsData);
  return (
    <>
      <Seo templateTitle='Blog' />

      <main className='space-y-28 pb-20'>
        {/* Hero Seciton */}
        <section id='sec-hero' className='overflow-hidden'>
          <div className='layout flex flex-col justify-center gap-3'>
            <h1 className='pt-32 font-bold leading-tight'>
              <span className='highlight'>
                AxStudios is sharing knowledge &{' '}
              </span>
              experience with you through our blog
            </h1>
            <p className='h3'>
              Insightful Content, Industry-Leading Strategies: The AX Studios
              Blog
            </p>
            <div className='group relative mt-10 w-full'>
              <NextImage
                alt='Hero image 1'
                className='aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-lg'
                src='/images/Hero/1.jpg'
                fill
                imgClassName='object-cover w-full h-full'
              />
            </div>
          </div>
        </section>

        <section>
          <div className='layout'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
                Read our
                <span className='highlight fancy'> Latest Blog</span>
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-100'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <Input
                placeholder='Search..'
                className='mx-auto mt-4 w-full max-w-sm'
              />
            </div>

            <div className='mx-auto mt-12 grid max-w-md grid-cols-1 gap-x-16 gap-y-12 lg:mt-16 lg:max-w-full lg:grid-cols-3'>
              {allPostsData.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        {/* <Contact>
          Explore Our Services: From Idea to Execution, We've Got You Covered
        </Contact> */}
      </main>
    </>
  );
}

export const BlogCard = ({
  title,
  description,
  lastUpdated,
  publishedAt,
  readingTime,
  tags,
  slug,
}: BlogFrontmatter) => (
  <UnstyledLink href={`/blog/${slug}`} className='group'>
    <NextImage
      alt='Hero image 1'
      className='aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg ring-primary-base ring-offset-0 ring-offset-base-100 transition-all duration-150 group-hover:ring-2 group-hover:ring-offset-4'
      src='/images/Hero/1.jpg'
      fill
      imgClassName='object-cover h-full w-full'
    />
    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.split(',').map((tag) => (
        <span key={tag} className='tag'>
          {tag}
        </span>
      ))}
    </div>
    <p className='mt-6 text-xl font-semibold'>
      <a href='#' title='' className=''>
        {title}
      </a>
    </p>
    <p className='mt-4 text-gray-100/70'>{description}</p>

    <div className='mt-6 mb-4 h-0 border-t-2 border-dashed border-gray-200'></div>
    <span className='block text-sm font-bold tracking-widest text-primary-base'>
      <span className='capitalize'>
        <AiOutlineClockCircle className='h4 inline-block text-base-content' />{' '}
        {readingTime.minutes} min read{' '}
      </span>
      <span className='uppercase'>
        <AiOutlineCalendar className='h4 inline-block text-base-content' />{' '}
        {format(new Date(lastUpdated ?? publishedAt), 'MMMM dd, yyyy')}
      </span>
    </span>
  </UnstyledLink>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllFilesFrontmatter('blog');
  return {
    props: {
      allPostsData,
    },
  };
};
