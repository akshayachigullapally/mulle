import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function RootLayOut() {
  return (
    <div>
        <Header />
        <div style={{minHeight:'100vh'}}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayOut