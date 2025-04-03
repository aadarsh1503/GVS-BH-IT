import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import TextButton, { TextButtonProps } from '@/components/buttons/TextButton';

type Props = {
  name: string;
  href: string;
  disabled?: boolean;
  close?: () => void;
  icon: IconType;
  description: string;
  children?: never;
} & Omit<TextButtonProps, 'children'>;

const PopoverLink = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      name,
      href,
      disabled,
      close,
      icon: Icon,
      description,
      className,
      ...rest
    },
    ref
  ) => {
    const router = useRouter();
    return (
      <TextButton
        type='button'
        onClick={() => {
          disabled || router.push(href);
          close && close();
        }}
        variant='basic'
        ref={ref}
        key={name}
        className={clsxm(
          className,
          'flex items-center justify-start rounded-lg py-2 px-3 text-left transition duration-150 ease-in-out hover:bg-base-content/10 focus:outline-none focus-visible:ring focus-visible:ring-primary-base focus-visible:ring-opacity-50',
          disabled && 'brightness-75'
        )}
        {...rest}
      >
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-100 sm:h-12 sm:w-12'>
          <Icon className='text-2xl text-primary-base' />
        </div>
        <div className='ml-4'>
          <p className='text-sm font-medium'>
            {name}

            {disabled && <span className='tag tag-sm ml-2'>soon</span>}
          </p>
          <p className='text-sm'>{description}</p>
        </div>
      </TextButton>
    );
  }
);

export default PopoverLink;
