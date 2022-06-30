import React from 'react'
import App1Sidebar from 'app1/Sidebar'
import App2Sidebar from 'app2/Sidebar'

interface IProps {
  isOpen: boolean;
  child: string;
}

export const SideBar = ({ child, isOpen }: IProps) => {
  enum componentMapper {
    'app1' = App1Sidebar,
    'app2' = App2Sidebar
  }

  return (
    <aside className={`transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} right-0 w-1/3 p-8 bg-blue-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}>
      {child && React.createElement(componentMapper[child])}
    </aside>
  )
}
