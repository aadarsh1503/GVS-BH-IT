import clsx from 'clsx';

import styles from './style.module.css';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import { RoadMapIn } from '@/constant/roadmap';

export default function RoadMapImgCard({
  title,
  fancy,
  id,
  img,
  description,
}: RoadMapIn) {
  return (
    <div
      className={clsx(styles.card, id % 2 === 0 ? styles.even : styles.odd)}
      key={title}
    >
      <NextImage
        alt='Hero image 3'
        className='relative shrink-0 self-stretch overflow-hidden rounded-lg'
        src={img}
        fill
        imgClassName='object-cover'
      />
      <div
        className={clsxm(
          styles.content,
          'z-10 rounded-xl border-2 border-base-content bg-base-100/80 p-5 backdrop-blur'
          // id % 2 == 0 ? 'md:-translate-x-20 ' : 'md:translate-x-20  '
        )}
      >
        <h3 className='h2'>
          {title} <span className='fancy highlight'>{fancy}</span>
        </h3>
        <p className='mt-2'>{description}</p>
      </div>
    </div>
  );
}
