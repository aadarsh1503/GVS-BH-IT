import 'twin.macro';

import { TeamCard } from '@/components/cards';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import WhatsAppButton from '@/components/WhatsapButton/WhatsapButton';

import team from '@/constant/team';

export default function AboutPage() {
  return (
    <>
      <Seo templateTitle='About' />
      <WhatsAppButton />
      <main className='space-y-10 pb-20 md:space-y-28'>
        {/* Hero Seciton */}
        <section id='sec-hero' className='overflow-hidden'>
          <div className='layout flex flex-col justify-center gap-3 pt-32'>
            <Title>about</Title>
            <h1 className='font-bold leading-tight'>
              <span className='text-primary-base'>
                Unleashing Creativity, Elevating Brands:{' '}
              </span>
              Welcome to GVS-BH
            </h1>
            <h2 className='mt-5'>
              We are a next-generation technology company, that brings to you
              the latest digital solutions tailored to the requirements of your
              business. We at GLOBAL VISION SOLUTIONS offers a wide array of services, ranging
              from Simple Static Sites to full-blown Content Managed Enterprise
              Solutions. A team of experienced developers, programmers, testers
              and designers work tirelessly to deliver quality business products
              that cater to the client’s demands. We focus on each client and
              work dedicatedly to provide innovative and dynamic solutions using
              cutting-edge tools and modern technology
            </h2>
          </div>
        </section>

        <section className='py-7'>
          <div className='layout'>
            <Title>Stats</Title>
            <div className='mx-auto text-center'>
              <h2 className='h1'>
                Glimpse of
                <span className='fancy text-primary-base'> Our Journey</span>
              </h2>
              <p className='mx-auto mt-3 max-w-2xl text-xl leading-relaxed text-primary-900 md:mt-8'>
                Building websites, shaping your vision: A journey to digital
                success
              </p>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3'>
              <StatsCard
                heading='Satisfied clients'
                desc='Creating the successful path'
                number='84+'
              />
              <StatsCard
                heading='Projects delivered'
                desc='till now...'
                number='144+'
              />
              <StatsCard
                heading='Team members'
                desc='Working for your success'
                number='7+'
              />
            </div>
          </div>
        </section>
        {/* sectoin team */}
        <section id='sec-team'>
          <div className='layout mb-10 flex flex-col gap-8 pb-10'>
            <Title>team</Title>
            <h2 className='max-w-5xl'>
              Our team of experienced web developers is dedicated to delivering
              high-quality and innovative web solutions that meet the unique
              needs of each of our clients.
            </h2>
            <div className='mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 '>
              {team.map((t) => (
                <>
                  <TeamCard {...t} key={t.id} />
                  {/* <FakeTeamCard key={t.id} /> */}
                </>
              ))}
            </div>
          </div>
        </section>
        {/* Section Content */}
        <section id='sec-about'>
          <article className='layout h3 mb-10 flex flex-col gap-8 pb-10'>
            <Title>what we solve?</Title>
            <h2 className='max-w-5xl'>
              Our team of experienced web developers is dedicated to delivering
              high-quality and innovative web solutions that meet the unique
              needs of each of our clients.
            </h2>
            {/* <p>
              We know the pains you feel not from the literature, but from own
              experience:
            </p> */}
            {/* Change the image */}
            {/* <ArrowCard
              src1='/images/Hero/2.jpg'
              text1='Outdated website design'
              src2='/images/Hero/1.jpg'
              text2='Modern, responsive website design to improve the brand image.'
            />

            <p>
              In each of these situations, the hard work and innovative approach
              created a saving circle for us:
            </p> */}
            <ArrowCard
              src1='/images/about/bad-perf.png'
              text1=' Slow website performance'
              src2='/images/about/good-perf.png'
              text2='Optimize website performance through image optimization, code
              optimization, and server-side optimization.'
            />

            <p className='h2 rounded-2xl border border-primary-base p-10 shadow-xl shadow-primary-base/20'>
              So, if you're looking for a web development agency that's
              dedicated to your success, look no further than Global Vision Solutions. Let's
              work together to create a website that takes your business to the
              next level.
            </p>
          </article>
        </section>
        {/* Section Roadmap */}
        {/* <section id='sec-about'>
          <div className='layout h3 flex flex-col gap-8  '>
            <Title>how we solve?</Title>
            <h2 className='max-w-5xl'>
              Our team of experienced web developers is dedicated to delivering
              high-quality and innovative web solutions that meet the unique
              needs of each of our clients.
            </h2>
            <ul className='grid gap-5 md:gap-5'>
              {roadmap.map((phase) => (
                <RoadMapImgCard {...phase} key={phase.id} />
              ))}
            </ul>
          </div>
        </section> */}
        {/* Contact */}
        {/* <Contact email='info@example.com' phone='123-456-7890'>
          I guess you are interested in our services. Let's talk!
        </Contact> */}
      </main>
    </>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
const StatsCard = ({
  number,
  heading,
  desc,
}: {
  number: string;
  heading: string;
  desc: string;
}) => (
  <div>
    <h3 className='h1 font-bold text-primary-base'>{number}</h3>
    <p className='mt-4 text-xl font-medium text-primary-base'>{heading}</p>
    <p className='mt-0.5 text-base text-primary-800'>{desc}</p>
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className='h2 font-cursive'>
    <span className='mr-3 inline-block h-2 w-10 rounded-full bg-base-content align-middle' />
    {children}
  </div>
);

type ArrowCard = {
  text1: string;
  src1: string;
  text2: string;
  src2: string;
};
const ArrowCard = ({ src1, src2, text1, text2 }: ArrowCard) => (
  <div className='mx-auto mt-20 grid w-full max-w-2xl grid-cols-5 grid-rows-5 place-content-center'>
    <div
      className='relative'
      style={{
        gridRow: '3/-1',
        gridColumn: '3/-1',
      }}
    >
      <NextImage
        alt='Down Image'
        className='relative aspect-1 w-full overflow-hidden rounded-xl rounded-b-none lg:rounded-b-xl'
        src={src1}
        fill
        imgClassName='object-cover object-top'
      />
      <div tw='lg:(absolute rounded-bl-none ring-4 text-xl rounded-t-xl ring-base-content border-4 border-base-100 top-0 right-0 max-w-3xl translate-x-1/2 -translate-y-1/2) rounded-2xl bg-blue-500 p-3 px-5 md:text-lg text-white text-sm rounded-t-none'>
        {text1}
      </div>
    </div>
    <div
      className='relative'
      style={{
        gridRow: '1/4',
        gridColumn: '1/4',
      }}
    >
      <NextImage
        alt='Uper image'
        tw='relative aspect-1 w-full overflow-hidden rounded-xl rounded-b-none lg:(rounded-b-xl ring-4 ring-base-content ring-offset-4 ring-offset-base-100)'
        src={src2}
        fill
        imgClassName='object-cover object-top'
      />{' '}
      <div tw='rounded-2xl w-full text-sm rounded-xl rounded-t-none bg-blue-500 p-3 px-5 text-white max-w-3xl md:text-lg lg:(absolute text-xl rounded-t-xl border-4 border-base-100 -translate-x-1/2 -translate-y-1/2 top-0 left-0 border-t-4 ring-4 ring-base-content rounded-br-none)'>
        {text2}
      </div>
    </div>
    {/* Arrow Svg */}
    <svg
      className='translate-y-5 rotate-45 text-base-content'
      viewBox='0 0 85 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        gridRow: '4/5',
        gridColumn: '2/3',
      }}
    >
      <path
        d='M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572'
        stroke='currentColor'
        stroke-width='3'
        stroke-linecap='round'
      ></path>
    </svg>
  </div>
);
