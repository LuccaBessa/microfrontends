import React, { Children } from 'react'

interface NavBarItem {
  name: string;
}

interface IProps {
  navBarItems: NavBarItem[];
  leading?: React.ReactNode
}

const Header = ({ navBarItems, leading }: IProps) => {
  return (
    <header className='flex bg-blue-900 p-8 items-center'>
      <p className='font-mono text-white text-4xl'>Logo</p>
      <nav className='flex px-8 justify-start items-start gap-8'>
        {navBarItems.map((item) => (
          <a className='font-mono text-white transition duration-150 border-b-2 border-transparent hover:border-white'>{item.name}</a>
        ))}
      </nav>
      {!!leading &&
        <div>
          {leading}
        </div>
      }
    </header>
  )
}

export default Header