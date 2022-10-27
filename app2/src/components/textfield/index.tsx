import React from 'react'

interface Props {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({label, onChange, value}: Props) => {
  return (
    <input type="text" value={value} onChange={onChange} placeholder={label} />
  )
}
