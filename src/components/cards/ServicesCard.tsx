import tw, { styled } from 'twin.macro';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import { ServiceIn } from '@/constant/services';

export default function ServicesCard({
  id,
  heading,
  points,
  description,
  Icon,
}: ServiceIn) {
  return (
    <Card index={id} key={heading}>
      <Icon className='text-7xl' />
      <h3 className='h2'>{heading}</h3>
      <p>{description}</p>
      <ul className='ml-6 list-disc space-y-2'>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ArrowLink
        className='h3 rounded-xl px-6 py-3'
        variant='dark'
        href='/contact'
        as={ButtonLink}
      >
        Contact
      </ArrowLink>
    </Card>
  );
}

const Card = styled.div<{ index: number }>(({ index }) => [
  tw`relative mt-0 flex-1 space-y-4 rounded-xl border border-base-content/30 bg-base-100/80 p-6 backdrop-blur`,
  `@media (min-width: 1024px) { margin-top: ${index * 10}rem; }`,`@media (max-width: 1024px) {width:100%}`,
]);
