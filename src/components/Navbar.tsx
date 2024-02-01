import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
<ul>
    <li><Link href={'/about'}>about</Link></li>
    <li><Link href={'/dashboard'}>dashboard</Link></li>
    <li><Link href={'/login'}>login</Link></li>
</ul>
    </>
  )
}

export default Navbar