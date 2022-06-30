import React from 'react'
import { SideBar } from '../../../../container/src/components/sidebar'

const Home = () => {
  const onClickOpenModal = () => {
    dispatchEvent(
      new CustomEvent('changeSideBarVisibility', {
        bubbles: true,
        detail: {
          isVisible: true,
          sidebarContent: 'app2'
        }
      })
    )
  }

  return (
    <div className='p-2'>
      <h1 className='text-blue-900 text-4xl pb-2'>App 2</h1>
      <button onClick={onClickOpenModal} className='rounded border-solid border-2 border-blue-900 text-blue-900 p-2'>Open Side Bar</button>
    </div>
  )
}

export default Home