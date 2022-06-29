import React from 'react'

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const SideBar = ({ children, isOpen }: IProps) => {
  return (
    <aside className={`transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} right-0 w-1/3 p-8 bg-blue-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}>
      {children}
    </aside>
  )
}
