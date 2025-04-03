import { FC } from 'react';

import styles from './index.module.css';
const Badge: FC = () => {
  return (
    <div className='absolute right-0 bottom-10 inline-block translate-x-1/2 md:right-20 md:bottom-20 md:translate-x-0 xl:right-[10vw] xl:bottom-[10vw]'>
      <div
        className={`${styles.pasueAnimationOnHover} border-primary/70 animate-spin rounded-full border-2 bg-base-content/5 p-8`}
        style={{ animationDuration: '10s' }}
      >
        <div className='rounded-full border border-base-content/50 bg-base-content/5 p-10'>
          <div className='aspect-square bg-primary w-7 rounded-full border-[4px] border-black'>
            <div className='absolute top-1/2 left-1/2 z-[9998] flex h-40 w-5 -translate-x-1/2 -translate-y-1/2  justify-center outline-none'>
              {Array.from('Design Service Agency Creative ').map(
                (char: string, i) => (
                  <span
                    key={`${char}${i}`}
                    className='absolute top-0 left-0 h-20 w-5 origin-[bottom_center] text-center'
                    style={{ rotate: `${i * 11.61}deg` }}
                  >
                    {char}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
