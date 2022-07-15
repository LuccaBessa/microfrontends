import React from 'react'
import { useAuth } from "container/useAuth";

const Sidebar = () => {
  const { token, setToken } = useAuth();

  const onClickCloseModal = () => {
    dispatchEvent(
      new CustomEvent('changeSideBarVisibility', {
        bubbles: true,
        detail: {
          isVisible: false,
          sidebarContent: null
        }
      })
    )
  }

  return (
    <article className='flex-1 flex-col w-full h-full gap-2 flex-grow'>
      <header className='flex bg-blue-900 w-full items-center justify-between p-8'>
        <h1 className='text-white text-4xl'>Sidebar do App 1</h1>
        <button onClick={onClickCloseModal} className='rounded border-solid border-2 border-white text-white p-2'>Close Modal</button>
      </header>
      <main className='flex flex-col w-full gap-2 p-2'>
        <p className='text-white'>Token: {token}</p>
        <button onClick={() => setToken('AUTH TOKEN')} className='rounded border-solid border-2 border-white text-white p-2 w-28'>Set Token</button>
      </main>
    </article>
  )
}

export default Sidebar
