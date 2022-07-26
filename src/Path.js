// import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Cart from './components/pages/Cart'
import Laptop from './components/pages/Laptop'
import Mobile from './components/pages/Mobile'
import Payment from './components/pages/Payment'

const Path = () => {
    // const [search ,setSearch] =useState()
    return (
        <>
            <Router>
                {/* <Nav  setSearch={setSearch}/> */}
                {/* <Nav/> */}
                <Routes>
                    <Route path='/' element={<Laptop/>}/>
                    <Route path='/mobile' element={<Mobile/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/payment/:amt,:sc,:dc' element={<Payment/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default Path