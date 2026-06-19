import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image src={'/logo.svg'} width={160} height={100} alt='logo'/>
      <ul>
        <li>Dashboad</li>
        <li>Question</li>
        <li>Upgrade</li>
        <li>How it Works?</li>
      </ul>
    </div>
  )
}

export default Header
