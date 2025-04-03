import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
};

export type ContentType = 'blog' | 'service' | 'product';

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'service'
  ? ServiceFrontmatter
  : ProductFrontmatter;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type ServiceFrontmatter = {
  slug: string;
  title: string;
  description: string;
};

export type LibraryType = {
  code: string;
  frontmatter: ServiceFrontmatter;
};

export type ProductFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type ProductType = {
  code: string;
  frontmatter: ProductFrontmatter;
};

export type FrontmatterWithTags = BlogFrontmatter | ServiceFrontmatter;
export type FrontmatterWithDate = BlogFrontmatter | ProductFrontmatter;
export type Frontmatter =
  | ProductFrontmatter
  | BlogFrontmatter
  | ServiceFrontmatter;
