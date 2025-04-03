import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { WorkIn } from '@/constant/work';

export default function WorkCard({
  url,
  name,
  thumbnail,
  description,
  id,
}: WorkIn) {
  return (
    <div
      className={clsxm(
        'my-16 block h-fit w-full overflow-hidden rounded-xl border border-base-content/30 bg-base-100/90 backdrop-blur'
        // id % 2 === 0 ? 'ml-auto' : 'mr-auto'
      )}
      key={name}
    >
      <UnstyledLink
        href={url}
        className={clsxm(
          ' h-full w-full lg:w-[50%]',
          id % 2 === 0 ? 'lg:float-right' : 'lg:float-left'
        )}
      >
        <NextImage
          alt={name}
          src={thumbnail}
          fill
          className='aspect-[1440/1024] w-full'
          imgClassName='object-contain !static'
        />
      </UnstyledLink>
      <h3 className='h2 flex w-full p-4 pb-0 text-3xl text-primary-600 md:text-4xl lg:w-[50%] lg:p-10 lg:text-6xl'>
        {name}
      </h3>
      <p className='h3 flex w-full p-4 text-justify md:text-lg lg:w-[50%] lg:px-11 lg:pb-10 lg:text-xl'>
        {description}
      </p>
    </div>
  );
}
