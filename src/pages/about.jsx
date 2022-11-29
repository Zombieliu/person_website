import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import henryImage from '@/images/henry.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
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
        <title>About -Henry Liu</title>
        <meta
          name="description"
          content="I’m Henry Liu. I live in MetaVerse, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={henryImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Henry Liu. I live in MetaVerse, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first program when I was 5-6 years old,
              </p>
              <p>
                After school, the computer with me for almost 20 years throughout my life,
                I began to play games and then to make games, learn how a person can manage the entire product,
                through the production of games operating games I earned the first bucket of money in elementary school,
                although only 50 dollars
              </p>
              <p>
                On the way of learning and growing, I made money while making games,
                I felt like I was the god of the game world,
                but at the same time I lost part of the interest I should have in the game,
                until after graduation, I came to the crypto world,
                I found something more interesting to me,
                these years I did a lot of things that are difficult to think of ordinary people
              </p>
              <p>
                Today, I’m the Chain Chief Architect of Web3Games and TinTinLand,
                I hope to help people open the door to the world of the future through products and education as the key,
                this is now my whole life long vision and mission
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/web3henry" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/zombiesliu/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Zombieliu?tab=repositories" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/incareer/in/ACoAACwSsgUButX8QriA1rq1MoaFy3RBGMn7frQ" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                  href="henry@web3games.org"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                henry@web3games.org
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
