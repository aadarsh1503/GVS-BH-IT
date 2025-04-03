import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

import { getFileBySlug, getFiles, getRecommendations } from '@/lib/mdx';

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

      <main className='min-h-main pb-5'>
        <section className='pt-24 '>
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
            </div>

            <hr className='dark:border-gray-600' />

            <section className=''>
              <article className='mdx prose mx-auto my-4 w-full max-w-max transition-colors dark:prose-invert'>
                <Component />
              </article>
            </section>
          </div>
        </section>
        {/* <Contact>
          Not find what you want or any changes? You can contact US
        </Contact> */}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('service');

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
  const post = await getFileBySlug('service', params?.slug as string);

  const recommendations = await getRecommendations(params?.slug as string);

  return {
    props: { ...post, recommendations },
  };
};
