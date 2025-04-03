import * as React from 'react';

import clsxm from '@/lib/clsxm';

const InputVariant = ['sm', 'lg'] as const;

type InputProps = {
  variant?: (typeof InputVariant)[number];
} & React.ComponentPropsWithRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'sm', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsxm(
          className,
          //#region  //*=========== Variants ===========
          [
            variant === 'sm' && ['px-3 py-2', 'h4'],
            variant === 'lg' && ['px-3 py-4', 'h2'],
          ],
          //#endregion  //*======== Variants ===========
          'font-medium',
          'rounded-md bg-base-content/10',
          'focus:outline-none focus:ring-2 focus:ring-primary-base'
        )}
        {...rest}
      />
    );
  }
);

export default Input;
