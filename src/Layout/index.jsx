import React from 'react'
import './style.css'

export default function Layout({children, name}) {
  return (
    <div className='layout-border'>
    <div className='layout'>
        <div className='label'>{name}</div>
        {children}
    </div>
    </div>
  )
}
