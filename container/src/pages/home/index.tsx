import React, { useState } from 'react'
import Header from '../../components/header'
import { SideBar } from '../../components/sidebar'
import App1 from './app1/App'

export const Home = () => {
  const [showSidebar, setshowSidebar] = useState<boolean>(false)

  const sidebarContent = <p>SideBar content</p>

  return (
    <>
      <Header navBarItems={[{ name: 'App 1' }, { name: 'App 2' }]} />
      <SideBar children={sidebarContent} isOpen={showSidebar} />
      <button onClick={() => setshowSidebar((prev) => !prev)}>{showSidebar ? 'Close' : 'Open'} side bar</button>
      <App1 />
    </>
  )
}
