import Seo from '@/components/Seo';

import faq, { FaqIn } from '@/constant/faq';

export default function FaqPage() {
  return (
    <>
      <Seo templateTitle='Faq' />

      <main className='space-y-28 pb-20'>
        {/* Hero Seciton */}
        <section id='sec-hero' className='overflow-hidden'>
          <div className='layout flex flex-col justify-center gap-3'>
            <h1 className='pt-32 font-bold leading-tight'>
              <span className='highlight'>Web Development Simplified </span>
              Your Questions, Our Answers
            </h1>
            <p className='h3'>
              A creative agency that crafting a digital experience.
            </p>
            {/* <div className='group relative mt-10 w-full'>
              <NextImage
                alt='Hero image 1'
                className='aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-lg'
                src='/images/Hero/faq.jpg'
                fill
                imgClassName='object-cover'
              />
            </div> */}
          </div>
        </section>

        <section>
          <div className='layout'>
            <h2 className='h1'>Frequently Asked Questions</h2>
            <div className='grid-col-1 mt-5 grid gap-x-12 lg:grid-cols-2'>
              {faq.map((f) => (
                <FAQCard {...f} key={f.id} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        {/* <Contact>
          Still Have Questions? Just drop us a message and we will get back to
          you as soon as possible.
        </Contact> */}
      </main>
    </>
  );
}

const FAQCard = ({ heading, ansPara }: FaqIn) => (
  <div className='py-9 last:pb-0'>
    <details className='w-full cursor-pointer select-none rounded-lg ring-1 ring-primary-500'>
      <summary className='px-4 py-6 font-primary md:text-2xl lg:text-xl'>
        {heading}
      </summary>
      <div className='ml-4 -mt-4 px-4 py-6 pt-0 text-justify text-gray-600'>
        {ansPara.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </details>
  </div>
  // <div className='py-9 last:pb-0'>
  //   <h3 className='h2'>{heading}</h3>
  //   {ansPara.map((p) => (
  //     <p
  //       key={p}
  //       className='h4 mt-3 font-medium tracking-wider text-primary-100'
  //     >
  //       {p}
  //     </p>
  //   ))}
  // </div>
);
