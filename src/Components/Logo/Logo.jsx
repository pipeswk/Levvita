import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <a className="navbar-brand" href="#">LEVVITA</a>
      </Link>
    </div>
  )
}

export default Logo