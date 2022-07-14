import React, { Children } from 'react'
import { Header } from './'

const Layout = ({children}: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
