import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import { SideBar } from '../../components/sidebar'
import { Routes, Route } from "react-router-dom";
import App1Home from 'app1/Home'
import App2Home from 'app2/Home'

interface SideBarProps {
  isVisible: boolean,
  sidebarContente: React.ReactNode
}

export const Home = () => {
  const [showSidebar, setshowSidebar] = useState<boolean>(false)
  const [sidebarContent, setSideBarContent] = useState<string | null>(null)

  useEffect(() => {
    addEventListener('changeSideBarVisibility', (sidebar) => {
      setshowSidebar(sidebar.detail.isVisible)
      setSideBarContent(sidebar.detail.sidebarContent)
    })

    return () => {
      removeEventListener('changeSideBarVisibility', () => setshowSidebar((prev) => !prev))
    }
  }, [])


  return (
    <main className='flex-col'>
      <Header navBarItems={[{ name: 'App 1', link: '/' }, { name: 'App 2', link: '/app2' }]} />
      <SideBar child={sidebarContent!} isOpen={showSidebar} />
      <Routes>
        <Route path='/' element={<App1Home />} />
        <Route path='/app2' element={<App2Home />} />
      </Routes>
    </main>
  )
}
