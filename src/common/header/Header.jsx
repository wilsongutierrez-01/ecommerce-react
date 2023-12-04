import React from 'react'
import "./Header.css"
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

const Header = ({cartItem, searchProducts, authenticatedUser}) => {
  return (
    <div>
      <Head/>
      <Search cartItem={cartItem} searchProducts={searchProducts} />
      <Navbar authenticatedUser={authenticatedUser}/>
      
    </div>
  )
}

export default Header
