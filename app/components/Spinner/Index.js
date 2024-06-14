'use client'
import React from 'react'
import './spinner.css'
export default function Spinner({cl}) {
  return (
    <div className={cl} >
      <div className="spinner"></div>
    </div>
  )
}
