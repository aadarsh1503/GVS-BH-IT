import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TextButtonVariant = ['primary', 'basic'] as const;

export type TextButtonProps = {
  variant?: (typeof TextButtonVariant)[number];
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      disabled: buttonDisabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'rounded-lg transition duration-100',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'disabled:text-primary-200',
          ],
          variant === 'basic' && [
            'text-base-content/80 hover:text-base-content active:text-base-content/80',
            'disabled:text-gray-300',
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed disabled:brightness-75',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default TextButton;
