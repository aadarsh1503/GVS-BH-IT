import * as React from 'react';

export default function CustomBlockQuote(
  props: React.ComponentPropsWithRef<'blockquote'>
) {
  // const content = (props.children as Array<React.ReactElement>)[1]?.props
  //   .children;
  // console.log(content);

  // const data = content.split('---');
  // if ((content as string).includes('---'))
  // return (
  // <blockquote className={`color-${data[0]}`}>{data.splice(1)}</blockquote>
  // );
  return <blockquote>{props.children}</blockquote>;
}
