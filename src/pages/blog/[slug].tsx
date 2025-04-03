import clsx from 'clsx';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import { MdHistory } from 'react-icons/md';

import { getFileBySlug, getFiles, getRecommendations } from '@/lib/mdx';

import CustomBlockQuote from '@/components/content/CustomBlockQuote';
import CustomCode, { Pre } from '@/components/content/CustomCode';
import CustomLink from '@/components/links/CustomLink';
import ShareTweetButton from '@/components/links/ShareTweetButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function SingleBlogPage({
  code,
  frontmatter,
  // eslint-disable-next-line unused-imports/no-unused-vars
  recommendations,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Link Constants ===========
  const COMMIT_HISTORY_LINK = `https://github.com/theodorusclarence/theodorusclarence.com/commits/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const GITHUB_EDIT_LINK = `https://github.com/theodorusclarence/theodorusclarence.com/blob/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const OG_BANNER_LINK = `https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_4:5,w_1200/theodorusclarence/banner/${frontmatter.banner}`;
  //#endregion  //*======== Link Constants ===========

  return (
    <>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        // isBlog
        image={OG_BANNER_LINK}
        date={new Date(
          frontmatter.lastUpdated ?? frontmatter.publishedAt
        ).toISOString()}
      />

      <main className='min-h-main'>
        <section className='pt-24'>
          <div className='layout'>
            <div className='pb-4 dark:border-gray-600'>
              <NextImage
                src='/images/Hero/1.jpg'
                alt={`Photo from unsplash: ${frontmatter.banner}`}
                width={1200}
                height={(1200 * 2) / 5}
                className='aspect-h-2 aspect-w-5'
                imgClassName='object-cover'
              />

              <h1 className='mt-4'>{frontmatter.title}</h1>

              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                Written on{' '}
                {format(new Date(frontmatter.publishedAt), 'MMMM dd, yyyy')}
              </p>
              {frontmatter.lastUpdated && (
                <div className='mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200'>
                  <p>
                    Last updated{' '}
                    {format(new Date(frontmatter.lastUpdated), 'MMMM dd, yyyy')}
                    .
                  </p>
                  <UnstyledLink
                    href={COMMIT_HISTORY_LINK}
                    className={clsx(
                      'inline-flex items-center gap-1 rounded-sm font-medium',
                      'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary-300',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                    )}
                  >
                    <MdHistory className='text-lg' />
                    <span>See changes</span>
                  </UnstyledLink>
                </div>
              )}
              <div className='mt-6 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                <div className='flex items-center gap-1'>
                  <HiOutlineClock className='inline-block text-base' />
                  <p>{frontmatter.readingTime.text}</p>
                </div>
              </div>
            </div>

            <hr className='dark:border-gray-600' />

            <section className=''>
              <article className='mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert'>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Component
                  components={
                    {
                      a: CustomLink,
                      code: CustomCode,
                      pre: Pre,
                      blockquote: CustomBlockQuote,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>

              <ShareTweetButton
                className='mt-12'
                url={`https://theodorusclarence.com/blog/${frontmatter.slug}`}
                title={frontmatter.title}
              />

              <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
                <UnstyledLink href={GITHUB_EDIT_LINK}>
                  Edit this on GitHub
                </UnstyledLink>
                <UnstyledLink href='/blog'>← Back to blog</UnstyledLink>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('blog', params?.slug as string);

  const recommendations = await getRecommendations(params?.slug as string);

  return {
    props: { ...post, recommendations },
  };
};
