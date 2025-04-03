import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import * as React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { BsPatchQuestion } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import { RiMenu2Fill, RiStore2Line } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';
import Backdrop from '@/components/layout/Backdrop';
import PopoverLink from '@/components/links/PopoverLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import ArrowLink from '../links/ArrowLink';
import ButtonLink from '../links/ButtonLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#sec-services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/#sec-work', label: 'Work' },
  { href: '/#sec-clients', label: 'Technologies' },
];

const mobileMenu = [
  { href: '/', description: 'Home', label: 'Home', icon: AiOutlineBook },
  {
    name: 'About Us',
    description: 'About Us',
    href: '/about',
    icon: RiStore2Line,
  },
  {
    name: 'Services',
    description: 'Our Services',
    href: '/#sec-services',
    icon: AiOutlineBook,
  },
  {
    name: 'Contact',
    description: 'Get in touch',
    href: '/contact',
    icon: RiStore2Line,
  },
  {
    name: 'Our Work',
    description: 'View Our Work',
    href: '/#sec-work',
    icon: BsPatchQuestion,
  },
  {
    name: 'Our Technologies',
    description: 'Technologies',
    href: '/#sec-clients',
    icon: AiOutlineBook,
  },
  {
    name: 'Latest Blogs',
    description: 'Read our latest blogs',
    href: '/blog',
    icon: AiOutlineBook,
    disabled: true,
  },
  {
    name: 'FAQ',
    description: 'Frequently Asked Questions',
    href: '/faq',
    icon: BsPatchQuestion,
  },
  {
    name: 'Store',
    description: 'Visit our store',
    href: '/store',
    icon: RiStore2Line,
    disabled: true,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header
        className={clsxm(
          'top-0 z-[60] flex w-full items-center justify-between bg-transparent text-black',
          'h-16 md:h-20',
          'border-b-2 border-base-content/5',
          'transition-all duration-1000 ease-in-out',
          'fixed',
          'bg-base-100/95 backdrop-saturate-[180%] duration-300 supports-[backdrop-filter]:bg-base-100/70 supports-[backdrop-filter]:backdrop-blur-[20px]'
        )}
      >
        <div className='layout flex h-14 items-center justify-between gap-2 md:gap-5'>
          <div>
            <Image
              src='/images/logo/gvs.svg'
              alt='logo'
              width={500}
              height={100}
              className='h-16 w-auto sm:h-20 md:h-24 lg:h-28'
            />
          </div>
          <nav className='ml-auto hidden md:block'>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-primary-base'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
              <li className='hidden lg:block'>
                <MoreBtn />
              </li>
            </ul>
          </nav>
          <ArrowLink
            href='/contact'
            as={ButtonLink}
            className='ml-auto rounded-full px-6 !text-lg md:text-sm'
          >
            Connect
          </ArrowLink>
          <IconButton
            onClick={() => setMenuOpen((p) => !p)}
            icon={RiMenu2Fill}
            variant='outline'
            isDarkBg
            className='text-3xl md:hidden'
          />
        </div>
      </header>
      <Backdrop
        isBlur
        isGradient
        isDarkBg
        show={menuOpen}
        onClose={() => setMenuOpen(false)}
        className='md:hidden'
      >
        <nav className='absolute top-0 left-1/2 mt-20 w-11/12 -translate-x-1/2 rounded-lg bg-base-100 p-4 transition-transform duration-300'>
          <div className='relative grid gap-3 rounded-lg bg-base-100 shadow-lg'>
            {mobileMenu.map((item, i) => (
              <PopoverLink
                close={() => setMenuOpen(false)}
                {...item}
                name={item.name ?? 'Default Name'} // <-- Fallback here
                key={i}
              />
            ))}
          </div>
        </nav>
      </Backdrop>
    </>
  );
}

const solutions = [
  {
    name: 'Latest Blogs',
    description: 'Learn about react, nextjs and tailwindcss',
    href: '/blog',
    icon: AiOutlineBook,
    disabled: true,
  },
  {
    name: 'FAQ',
    description: 'Frequently Asked Questions',
    href: '/faq',
    icon: BsPatchQuestion,
  },
  {
    name: 'Store',
    description: 'Visit our store',
    href: '/store',
    icon: RiStore2Line,
    disabled: true,
  },
];

export function MoreBtn() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            as={TextButton}
            variant='basic'
            className='h4 group font-medium text-black'
          >
            More <HiChevronDown className='h3' />
          </Popover.Button>
          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0'>
              <div className='relative grid gap-2 overflow-hidden rounded-lg bg-base-100 p-3 shadow-lg ring-2 ring-base-content ring-opacity-20'>
                {solutions.map((item, i) => (
                  <PopoverLink
                    {...item}
                    key={i}
                    close={() => {
                      open;
                    }}
                  />
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
