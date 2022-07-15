import React from 'react'
import { useAuth } from "container/useAuth";

const Home = () => {
  const { token } = useAuth();

  const onClickOpenModal = (sidebarContent: string) => {
    dispatchEvent(
      new CustomEvent('changeSideBarVisibility', {
        bubbles: true,
        detail: {
          isVisible: true,
          sidebarContent
        }
      })
    )
  }

  return (
    <div className='flex-1 flex-col p-2'>
      <h1 className='text-blue-900 text-4xl pb-2'>App 2</h1>
      <p>Token: {token}</p>
      <button onClick={() => onClickOpenModal('app2')} className='rounded border-solid border-2 border-blue-900 text-blue-900 p-2 mr-2'>Open Side Bar 2</button>
      <button onClick={() => onClickOpenModal('app1')} className='rounded border-solid border-2 border-blue-900 text-blue-900 p-2'>Open Side Bar 1</button>
    </div>
  )
}

export default Home