import React from 'react'

const Sidebar = () => {
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
    <article className='flex w-full items-center justify-between'>
      <h1 className='text-white text-4xl'>Sidebar do App 1</h1>
      <button onClick={onClickCloseModal} className='rounded border-solid border-2 border-white text-white p-2'>Close Modal</button>
    </article>
  )
}

export default Sidebar
