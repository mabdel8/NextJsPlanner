import React from 'react'
import { Home } from 'lucide-react'
import Link from 'next/link'



const links = [
    {name: 'Home', href: '/', icon: Home}
]

export default function SideLinks() {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon
                return (
                    <Link key={link.name} href={link.href} className='flex gap-2 justify-center items-center'>
                        <LinkIcon size={20} />
                        <p>{ link.name }</p>
                    </Link>
                )
            })}
        </>
      
  )
}
