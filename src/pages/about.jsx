import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex justify-center lg:justify-start')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jack Oporto</title>
        <meta
          name="description"
          content="I’m Jack Oporto, a software engineer living in Orlando FL. I’m passionate about building great software and helping others do the same."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 pl-10 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jack Oporto, <br />{' '}
              <span className="text-4xl">
                a software engineer based in Orlando, FL.
              </span>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've loved building and fixing things for as long as I can
                remember. I developed an interest in programming at an early age
                but didn't think I was good enough to make it my profession.
                I've been a cook for many years now, and I've found satisfaction
                and happiness in the growing process. "You don't have to be
                great to start, but you have to start to be great."
              </p>
              <p>
                Working for a Michelin-recommended restaurant group instills a
                sense of responsibility, to yourself and your guests. You must
                hold yourself to a higher standard and never get too
                comfortable. No matter the craft, there's something alluring
                about the push to get better and better. Always be better than
                you were. In 2020, I resolved to pursue a Bachelor's degree in
                software engineering, which I completed in 2022.
              </p>
              <p>
                Since then, I've spent most of my time creating new projects,
                learning fundamental concepts and working on my portfolio. I'm
                currently looking for a full-time position as a software
                engineer. I hope to work with a team that is passionate about
                what they do and is always looking to improve.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/OpoJack"
                icon={GitHubIcon}
                className="mt-4"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jack-oporto/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/jackoporto/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Instagram
              </SocialLink>
              <SocialLink
                href="mailto:oportojack@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                oportojack@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
