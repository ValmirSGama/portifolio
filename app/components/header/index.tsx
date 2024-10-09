'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 h-[96px] w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
      <Link href="/">
          <Image
            src="/images/LogoValmir.svg"
            alt="Logo VALMIR DEV"
            width={118}
            height={109}
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}