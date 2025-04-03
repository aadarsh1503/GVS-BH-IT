import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/store/2021-retrospectivecopy',
    price: '$48',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '/store/2021-retrospectivecopy',
    price: '$35',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '/store/2021-retrospectivecopy',
    price: '$89',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '/store/2021-retrospectivecopy',
    price: '$35',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/store/2021-retrospectivecopy',
    price: '$48',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '/store/2021-retrospectivecopy',
    price: '$35',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '/store/2021-retrospectivecopy',
    price: '$89',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '/store/2021-retrospectivecopy',
    price: '$35',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/store/2021-retrospectivecopy',
    price: '$48',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '/store/2021-retrospectivecopy',
    price: '$35',
    imageSrc: '/images/Hero/1.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
];

export default function StorePage() {
  return (
    <>
      <Seo templateTitle='Store' />

      <main>
        {/* Hero Seciton */}
        <section id='sec-hero' className='overflow-hidden'>
          <div className='layout flex flex-col justify-center gap-3'>
            <h1 className='pt-32 font-bold leading-tight'>
              <span className='highlight'>AxStudios is dedicated to </span>
              build user experience not just the product
            </h1>
            <p className='h3'>
              A creative agency that crafting a digital experience.
            </p>
            <div className='group relative mt-10 w-full'>
              <NextImage
                alt='Hero image 1'
                className='aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-lg'
                src='/images/Hero/1.jpg'
                fill
                imgClassName='object-cover'
              />
            </div>
          </div>
        </section>

        <section className=''>
          <div className='layout py-16 sm:py-24'>
            <h2 className='h1'>
              Our
              <span className='fancy highlight'> Products</span>
            </h2>

            <div className='mt-10 grid grid-cols-[none] gap-y-10 gap-x-6 sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              {products.map((product, i) => (
                <UnstyledLink
                  key={i}
                  href={product.href}
                  className={clsxm(
                    'group col-span-2 sm:col-span-1',
                    (i === 0 || i === 1) && 'sm:col-span-2 sm:row-span-1'
                  )}
                >
                  <NextImage
                    className={clsxm(
                      'w-full overflow-hidden rounded-lg bg-gray-200',
                      'aspect-w-1 xl:aspect-w-7',
                      'aspect-h-1 xl:aspect-h-8',
                      'ring-primary-base ring-offset-0 ring-offset-base-100 transition-all duration-150 group-hover:ring-2 group-hover:ring-offset-4',
                      (i === 0 || i === 1) && 'sm:aspect-w-2 xl:aspect-w-15'
                    )}
                    fill
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    imgClassName='h-full w-full object-cover object-center'
                  />
                  <h3 className='h3 mt-4 text-primary-50'>{product.name}</h3>
                  <span className='mt-2 inline-flex rounded-full border border-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-500'>
                    Marketing
                  </span>{' '}
                  <span className='mt-2 inline-flex rounded-full border border-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-500'>
                    Marketing
                  </span>
                  <p className='mt-1 text-lg font-medium text-primary-200'>
                    {product.price}
                  </p>
                </UnstyledLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
