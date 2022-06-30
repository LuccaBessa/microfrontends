import React from 'react'
import { Link } from "react-router-dom";

interface NavBarItem {
  name: string;
  link: string;
}

interface IProps {
  navBarItems: NavBarItem[];
  leading?: React.ReactNode
}

const Header = ({ navBarItems, leading }: IProps) => {
  return (
    <header className='flex bg-blue-900 p-6 items-center'>
      <p className='font-mono text-white text-4xl'>Logo</p>
      <nav className='flex px-6 justify-start items-start gap-8'>
        {navBarItems.map((item, index) => (
          <Link key={'nav' + index} to={item.link} className='font-mono text-white transition duration-150 border-b-2 border-transparent hover:border-white'>{item.name}</Link>
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