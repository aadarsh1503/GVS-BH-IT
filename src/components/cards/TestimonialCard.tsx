'use client';

import { ClientSayIn } from '@/constant/clientsays';

export default function TestimonialCard({ description }: ClientSayIn) {
  return (
    <div className='border-bse-content/30 relative mt-0 h-full flex-1 space-y-4 rounded-xl border bg-base-100/80 p-6 backdrop-blur'>
      <p className='h5 h-fit text-justify'>{description}</p>
    </div>
  );
}
