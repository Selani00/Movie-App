'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title, param}) => {

    const searchParams = useSearchParams();
    const genra = searchParams.get('genra');
  return (
    <div>
      <Link 
      className={`hover:text-amber-600 font-semibold ${genra === param ? 'underline underline-offset-4 decoration-4 decoration-amber-500 rounded-lg' : ""}`}
      href={`/?genra=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
