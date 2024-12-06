import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Links() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
  ]
  return (
    <div>
      <ul className='flex w-[30%] gap-2 justify-between max-[768px]:hidden max-[1000px]:w-1/2'>
        {links.map(link => (
          <li className="text-white hoverOnLink" key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <FaBars className='min-[768px]:hidden text-white'size={24} />
    </div>

  )
}
