import { RoadMapIn } from '@/constant/roadmap';

export default function RoadMapCard({
  title,
  id,
  fancy,
  description,
}: RoadMapIn) {
  return (
    <div
      className='roadmap relative grid w-full max-w-xl grid-cols-[min-content_1fr] gap-2 gap-x-4 rounded-xl border border-base-content/30 p-4'
      key={title}
    >
      <span className='h2 aspect-square row-span-2 flex w-12 shrink-0 items-center justify-center self-start rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-primary-base p-2'>
        {id + 1}
      </span>
      <h3 className='h2 text-primary-base'>
        {title} <span className='text-primary-base'>{fancy}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
}
