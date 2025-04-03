import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  imgStyle?: React.CSSProperties;
} & (
  | { fill?: never; width: string | number; height: string | number }
  | { fill: true; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  imgStyle,
  className,
  imgClassName,
  blurClassName,
  style,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px`, ...style } : style}
      className={className}
    >
      <Image
        className={clsxm(
          imgClassName,
          status === 'loading' && clsxm('animate-pulse', blurClassName)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        style={imgStyle}
        {...rest}
      />
    </figure>
  );
}

export const MotionImage = motion(Image);
