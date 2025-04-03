import { IconType } from 'react-icons';
import { BsQuestionLg } from 'react-icons/bs';
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill,
} from 'react-icons/ri';

import IconLink from '@/components/links/IconLink';
import NextImage from '@/components/NextImage';

import { TeamIn } from '@/constant/team';

export const socialIcons: Record<string, IconType> = {
  instgram: RiInstagramFill,
  facebook: RiFacebookBoxFill,
  linkedin: RiLinkedinFill,
  twitter: RiTwitterFill,
  github: RiGithubFill,
  email: RiMailFill,
};

export default function TeamCard({
  about,
  name,
  profileURL,
  socials,
  tag,
}: TeamIn) {
  return (
    <>
      <div>
        {profileURL ? (
          <NextImage
            alt={name}
            className='relative aspect-1 w-36 overflow-hidden rounded-full'
            src={profileURL}
            fill
            imgClassName='object-cover'
          />
        ) : (
          <div className='h-36 w-36 rounded-full bg-primary-base' />
        )}
        <h3 className='my-2'>{name}</h3>
        <p className='tag tag-sm tag-fill'>{tag}</p>
        <p className='my-2'>{about}</p>
        <ul className='flex items-center space-x-3'>
          {socials.map((s) => (
            <li key={s.name}>
              <IconLink
                href={s.href}
                variant='ghost-primary'
                icon={socialIcons[s.name]}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* <FakeTeamCard /> */}
    </>
  );
}
export function FakeTeamCard() {
  return (
    <div>
      <div className='relative aspect-1 w-36 overflow-hidden rounded-full bg-base-content bg-[repeating-linear-gradient(-45deg,rgb(var(--tw-base-100)),rgb(var(--tw-base-100))_5px,rgb(0,0,0)_5px,rgb(0,0,0)_25px)] opacity-80' />
      <h3 className='my-2'>� � � � � �</h3>
      <p className='tag tag-sm tag-fill'>� . � . � . � </p>
      <div className='my-2'>
        <div className='h-3 w-4/5 rounded-full bg-black/80'></div>
        <div className='mt-2 h-3 w-4/6 rounded-full bg-black/80'></div>
        <div className='mt-2 h-3 w-4/12 rounded-full bg-black/80'></div>
      </div>
      <ul className='flex items-center space-x-3'>
        {[
          'https://www.linkedin.com/company/axstudioss/',
          'https://twitter.com/axstudioss',
          'https://github.com/ax-studios',
        ].map((s) => (
          <li key={s}>
            <IconLink href={s} variant='ghost-primary' icon={BsQuestionLg} />
          </li>
        ))}
      </ul>
    </div>
  );
}
